const fse = require('fs-extra');
const path = require('path');
const md = new require('markdown-it')();
md.use(require('markdown-it-meta'));

const parsePost = async (postPath)=>{
	const raw = await fse.readFile(`./posts/${postPath}`, 'utf8');
	const post = md.render(raw);
	return {
		post,
		name : path.basename(postPath, '.md'),
		meta : md.meta
	};
};

module.exports = async ()=>{
	const postPaths = await fse.readdir('./posts');
	return Promise.all(postPaths.map(parsePost));
};
