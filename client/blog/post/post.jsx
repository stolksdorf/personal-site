require('./post.less');
const React = require('react');
const Markdown = require('pico-md/component.js');
const {Title, Description} = require('vitreum/headtags');


const readTimeInMin = (text)=>{
	const WORDS_PER_MIN = 200;
	return text.split(' ').length / WORDS_PER_MIN;
}

function Post({ post }){
	return <div className={`Post`}>
		<Title>{post.title}</Title>
		<Description>{post.desc}</Description>


		<div className='postInfo'>
			<h1>{post.title}</h1>
			<p>{post.desc}</p>
			{post.tags.length &&
				<ul>
					{post.tags.map((tag)=><a href={`?tag=${tag}`} key={tag}>#{tag}</a>)}
				</ul>
			}
			<div className='date'>{post.created.toLocaleString()}</div>
			<div className='readTime'>About {Math.ceil(readTimeInMin(post.content))}min</div>
		</div>
		<hr />
		<Markdown className='content'>{post.content}</Markdown>
	</div>;
};

module.exports = Post;