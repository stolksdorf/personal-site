require('./homePage.less');
const React = require('react');


//https://nicepage.com/doc/article/20348/web-design-3-0-when-your-web-design-really-matters

//const GameOfLife = require('shared/gameOfLife/gameOfLife.jsx');

function HomePage(){
	return <div className={`HomePage`}>
		<div className='left'>
			<h1>Scott Tolksdorf</h1>
			<small>I build things</small>
		</div>

		<div className='right'>
			<div className='panel'>Resume</div>
			<div className='panel'>Resume</div>
			<div className='panel'>Resume</div>
			<div className='panel'>Resume</div>
		</div>
	</div>;
};

module.exports = HomePage;