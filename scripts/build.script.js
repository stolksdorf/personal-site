
const fs = require('fs-extra');

const { pack, livereload, watchFile } = require('vitreum');
const isDev = !!process.argv.find(arg=>arg=='--dev');

const cssTransform = require('vitreum/transforms/css.js');
const lessTransform = require('vitreum/transforms/less.js');


const transforms = {
	'.css' : cssTransform,
	'.less' : lessTransform,
	'.md' : (text)=>`module.exports=\`${text}\`;`,

	'*': require('vitreum/transforms/asset.js')('./build')
};

const build = async ({ bundle, ssr })=>{
	await fs.outputFile('./build/bundle.css', cssTransform.generate() + '\n' + await lessTransform.generate(isDev));
	await fs.outputFile('./build/bundle.js', bundle);
	await fs.outputFile('./build/ssr.js', ssr);
};


fs.emptyDirSync('./build');
pack('./client/main/main.jsx', {
	dev : isDev && build,
	transforms,
	paths : ['./client']

})
.then(build)
.then(()=>{
	if(isDev){
		livereload('./build');
		watchFile('./app.js');
	}
})
.catch((err)=>console.log(err))