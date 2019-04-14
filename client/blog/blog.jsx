require('./blog.less');
const React = require('react');

const Post = require('./post/post.jsx');
const List = require('./list/list.jsx');

function Blog({ post, posts }){

	if(post) return <Post post={post} />

	return <List posts={posts} />
};

module.exports = Blog;