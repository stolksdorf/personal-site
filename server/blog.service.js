const config = require('../config');
const md = require('pico-md');
const fse = require('fs-extra');
const glob = require('glob');

const snakeCase = (text)=>text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '_');

const shouldShow = (isPublished)=>isPublished===true || (config.get('blog.show_unpublished') && isPublished === false);
const metaOnly = (post)=>{
	const {content, ...rest} = post;
	return rest;
}

const Posts = glob.sync('./posts/**/*.md')
	.map((path)=>{
		const content = fse.readFileSync(path, 'utf8');
		const meta = md(content).meta;
		if(!meta) return {};
		return {
			...meta,
			content,
			link : `/blog/${meta.id}/${snakeCase(meta.title)}`
		};
	})
	.filter((post)=>shouldShow(post.published))
console.log(`Loaded ${Posts.length} posts!`);


module.exports = {
	get : (id)=>Posts.find((post)=>post.id==id),
	summaries : ()=>Posts.map(metaOnly),
	byTag : (tag)=>Posts.filter((post)=>post.tags.includes(tag)).map(metaOnly)
}