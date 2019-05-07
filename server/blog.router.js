const router = require('express').Router();
const blogRenderer = require('../build/blog/render.js');
const Blog = require('./blog.service.js');

const Routes = require('../client/shared/routes.js');

router.get([`${Routes.main.blog}/:blog_id`, `${Routes.main.blog}/:blog_id/*`], (req, res) => {
	console.log(req.params.blog_id);
	console.log(Blog.get(req.params.blog_id));

	const post = Blog.get(req.params.blog_id);

	return res.send(blogRenderer({
		url  : req.url,
		post,
	}));
});


router.get(`${Routes.main.blog}`, (req, res) => {
	const posts = (req.query.tag)
		? Blog.byTag(req.query.tag)
		: Blog.summaries();

	console.log(posts);

	return res.send(blogRenderer({
		url : req.url,
		tag : req.query.tag,

		posts
	}));
});

module.exports = router;