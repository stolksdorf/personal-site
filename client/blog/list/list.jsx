require('./list.less');
const React = require('react');

//rename to postList


function List({ posts }){
	return <div className={`List`}>
		Post list
		{posts.map((post)=>{
			return <div key={post.id}>{post.title}

			<a href={post.link}>link</a>
			</div>
		})}

		<a href='?tag=jsx'>test</a>
	</div>;
};

module.exports = List;