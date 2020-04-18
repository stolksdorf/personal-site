
const fs = require('fs-extra');

const { pack, html, livereload, watchFile, server } = require('vitreum');
const isDev = !!process.argv.find(arg=>arg=='--dev');


const Project = '/' + require('../package.json').name;

const headtags = require('vitreum/headtags.js');
const cssTransform = require('vitreum/transforms/css.js');
const lessTransform = require('vitreum/transforms/less.js');


const transforms = {
	'.css' : cssTransform,
	'.less' : lessTransform,
	'.md' : (text)=>`module.exports=\`${text}\`;`,

	//The 2nd param will prefix all asset urls with the project url
	'*': require('vitreum/transforms/asset.js')('./build', Project)
};

const build = async ({ bundle, render, ssr })=>{
	await fs.outputFile('./build/bundle.css', cssTransform.generate() + '\n' + await lessTransform.generate(isDev));
	await fs.outputFile('./build/bundle.js', bundle);
	await fs.outputFile('./build/ssr.js', ssr);

	// console.log(headtags.generate())
	// await fs.outputFile('./build/index.html', html({
	// 	head : `<link href='${Project}/bundle.css' rel='stylesheet'></link>\n${headtags.generate()}`,
	// 	body : render(),
	// 	tail : `<script src='${Project}/bundle.js'></script>`,
	// }));
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