---
id        : demysterifying_bundlers
title     : Demysterifying Bundlers
desc      : Understanding Javascript bundling by making our own
published : false
created   : 03-05-2020
tags:
  - js
  - coding
  - pico
---


# Demysterifying Bundlers



Examples
- Browserify
- Webpack
- Parcel


The way you'd like to organize your code is rarely the way the browser wants to receive it.


Bundlers take code written in node-style; groups and transfoms it and then bundles it together into a single file that can be ran standalone in any environment. Whether that's with many files that depend on eachother, or with non-browser friendly file types like Typescript, JSX, or markdown.

How it does this is relatively straight-forward, however the popular frameworks have many optimizations and quality-of-life features that make bundlers feels like black magic.

So let's pull back the curtain and build our own bundler from scratch.


### Steps needed to bundle

1. Dependacy Graph
2. Transforms
3. Bundler
4. *Extra* Partial Rebundling


### Dependacy Graph

A dep graph is a graph-like mapping of which files require/import which other files in your program.

A good representation to use is an array of objects, with each looking like this:

```js

// in /src/gen_greeting.js
const {capitalize} = require('lodash');
const greeting = require('../text/greeting.js');

module.exports = (name)=>{
	return `${greeting}, ${capitalize(name)}`;
};



// in /text/greeting.js
module.exports = `Oh hello, `;
```

_The resulting dependacy graph... _

```js
[
	{
		filepath : '/src/gen_greeting.js',
		deps: {
			'../text/greeting.js' : '/text/greeting.js',
			'lodash': '/node_modules/lodash/index.js'
		}
	},
	{
		filepath : '/text/greeting.js',
		deps: {}
	},
	...
]
```

Here the `filepath` is the real path to the given file in our project, and `deps` is key-value pairs where the key is relative path to the dependacy from the file, and the value is the real path to that depndacy.


So lets write some code to generate this graph. We need two functions, 1) Take a file's code as a string and returns an array of found dependacies within, 2) Takes a file's path, reads in the code, calls the first function, and recursively calls itself for each of the found dependacies.

```js

const getDeps = (code)=>{
	// This is a pretty hacky way of finding the dependacies...
	// But we'll address this later
	let match,result=[];
	const rgx = /require\(['"`]([\s\S]*?)['"`]\)/g;
	while (match=rgx.exec(code)){
		result.push(match[1]);
	};
	return result;
}


const fs = require('fs').promises;

const buildDepGraph = async (rootFilepath)=>{
	let Graph = [];

	const processFile = async (filepath)=>{
		//If we've already processed a file, don't do it again
		if(Graph.find((dep)=>dep.filepath == filepath)) return;

		const code = await fs.readFile(filepath);
		const deps = getDeps(code);

		Graph.push({
			filepath,
			deps
		})

		await Promise.all(deps.map((dep)=>{
			const target = require.resolve(dep, {
				paths : [filepath]
			});
			return processFile(target);
		})
	}

	await processFile(rootFilepath);
	return Graph;
}

```


Neat! So now given any file path we can build out a graph of it's dependacies.

*Note*: For this post, we're doing a very simplistic method of finding out the dependacies. Bundlers will typically parse the file into something called an [AST]() and walk that to find all of the dependacies. This is much more reliable and effective, including support for `import`. To add that, we can just modify our `getDeps` function to support AST parsing and walking. Check out [Acorn]() lib for more details.


### Transforms

One of the most useful features of bundlers is Transforms. Transform are a bit of custom code that is applied when you read a file in, which can be used to dramatically change how your bundler treats the file, as well as expanding what file types you can support.

Most bundlers will apply a [Babel]() transpile to incoming code, to make sure it works on any browser. However you can go much more exotic, allowing you to require in Markdown files, styling, custom file types, and even assets!

Let's add the ability to do transforms to our lib. We'll just define our transforms at the top of the file, but you'll see that you add the ability to pass custom transforms in as an argument.

Since we might be modifying the file code now, we'll want to store the transformed file code into our dependacy graph for use when we bundle. So we'll add that in as well.

```js

const path = require('path');
const fs = require('fs').promises;

const Transforms = {
	// Just a simple pass-through for regular ol' js code
	'.js' : (code, filepath)=>code,

	// We'll apply a babel transform here to convert our JSX to standard JS
	// Note that our transforms can async!
	'.jsx': async (code, filepath)=>{
		return (await require('@babel/core')
			.transformAsync(code, { presets : ['@babel/preset-react'] })
		).code;
	},

	// We have a catch-all transform here. We'll use this to require in assets; images, fonts, etc.
	// To do this we'll copy the asset file over to a /asset directory which will be served from our server
	// And we'll return the string path to that asset to the bundler. So requiring this file will give you the path to use it!
	'*' : async (code, filepath)=>{
		const newDest = path.relative(process.env, filepath);
		await fs.copy(filepath, path.join('/assets', newDest));
		return `module.exports='/${newDest.replace(/\\/g, '/')}';`;
	},
}

const getCode = async (filepath, transforms)=>{
	const content = await fs.readFile(filepath);
	const ext = path.extname(filepath);
	const transform = (transforms[ext] || transforms['*']);
	return await transform(content, filepath);
};



const buildDepGraph = async (rootFilepath)=>{
	let Graph = [];

	const processFile = async (filepath)=>{
		//If we've already processed a file, don't do it again
		if(Graph.find((dep)=>dep.filepath == filepath)) return;

		const code = await getCode(filepath);
		const deps = getDeps(code);

		Graph.push({
			filepath,
			code,
			deps
		})

		await Promise.all(deps.map((dep)=>{
			return processFile(path.relative(filepath, dep));
		})
	}

	await processFile(rootFilepath);
	return Graph;
}
```




### Bundling

Now for the most important step. The bundler will take a dependacy graph (with the transformed code in it) and produce a string of javascript that can be executed stand alone. It does this be taking each dependacy and wrapping the code in a little functional bubble that behaves like a Node.js enviroment. The bundler will then provide the scoped variables the code expects; `module`, `global`, `require`, run it in that little sandbox and hand off the result to whatever code needed it.


```js
const bubble = (require, module, global)=>{
	/// Code From project
	const foo = require('./foo.js');
	module.exports = foo + global.bar
	///
};
```


So first we need to convert our dependacy graph into a bunch of these little functional bubbles. And second we need a "runner" that knows how to create each of `module`, `global`, `require` and execute the bubbles and pass on the result.

Remember that we need to actually produce a string result, and not actually create real functions, since the bundle will be saved as a file and execute later.

```js

const createModules = (depGraph)=>{
	// We are storing the bubble and the dep list as a two element array.
	const modulesAsString = depGraph.map((mod)=>{
		return `"${mod.filepath}":[function(require, module, global){${mod.code}\n},${JSON.stringify(mod.deps)}]`;
	}).join(',');

	return '{' + modulesAsString  + '}';
};

const createBundle = async (filepath)=>{
	let depGraph = await buildDepGraph(filepath);
	let modules = createModules(depGraph);

	return `
	(function(){

		//Setup our concept of 'global', works for both node and browser
		let _global = this;
		if(typeof global !== "undefined") _global = global;
		if(typeof window !== "undefined") _global = window;


		//Setup a shared cache and module list.
		//Works if we load multiple bundles, they will all share!
		_global.cache = _global.cache || {};
		_global.modules = Object.assign(_global.modules || {},
			${modules}
		);


		// Our custom require function that uses our module list and cache.
		const req = (fp)=>{
			if(_global.cache[fp]) return _global.cache[fp];
			let module = {exports : {}};

			const [func, deps] = _global.modules[fp];
			const customRequire = (path)=>req(deps[path]);

			func(customRequire, module, _global);

			_global.cache[fp] = module.exports;
			return module.exports;
		}

		// Returns the top-level module whether we're in node or browser.

		if(typeof exports === "object" && typeof module !== "undefined") {
			module.exports = req('${filepath}');
		}else{
			_global.main = req('${filepath}');
		}
	})();
	`
}
```

Whew! It's a lot of code, and it's code making code-as-a-string, but if you save the output above as a js file, it will run on either Node or the browser with out any dependancies.

You may notice we added a bit of code to handle cacheing of our already ran modules, no need to run them twice. And we are sharing/merging the module list through the global-scope. This means that if we make two bundles and run them both they can refence eachother.

This is useful for a concept called _bundle-splitting_. Where you might create a bundle of all of your large libraries that might take a while to run, and another bundle that's your application code. You can build the former once, an iteratively run the latter.



### TBD

- Module watching
- Add links