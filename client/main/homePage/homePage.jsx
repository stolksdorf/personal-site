require('./homePage.less');
const React = require('react');

const Routes = require('shared/routes.js');

const {Link} = require('pico-router');

const Footer = require('../footer/footer.jsx');


const buttons = [
	{
		text : 'Resume',
		icon : 'file-text-o',
		color : 'teal',
		link : Routes.main.resume
	},
	{
		text : 'Github',
		icon : 'github',
		color : 'steel',
		link : Routes.external.github
	},
	{
		text : 'Mentorship',
		icon : 'user-plus',
		color : 'orange',
		link : Routes.main.mentorship
	},
	{
		text : 'Blog',
		icon : 'pencil-square-o',
		color : 'purple',
		link : Routes.main.blog
	},
	{
		text : 'LinkedIn',
		icon : 'linkedin',
		color : 'blue',
		link : Routes.external.linkedin
	},
	{
		text : 'Email',
		icon : 'envelope-o',
		color : 'red',
		link : Routes.external.linkedin
	},
]


//https://nicepage.com/doc/article/20348/web-design-3-0-when-your-web-design-really-matters

//const GameOfLife = require('shared/gameOfLife/gameOfLife.jsx');

function HomePage(){
	return <div className={`HomePage`}>


		<div className='left'>



			<div className='accentRed' />
			{/*<div className='accentGrey' /> */}

			<div className='content'>
				<div className='name'>
					<h1>Scott</h1>
					<h2>Tolksdorf</h2>
				</div>
				<small>I build things</small>
			</div>

		</div>


		<div className='right'>

			<div className='buttons'>
				{buttons.map((btn)=>{
					return <Link href={btn.link} key={btn.text}>
						<button className={btn.color}>
							<div className='slide' />
							<i className={`fa fa-fw fa-${btn.icon}`} /> {btn.text}
						</button>
					</Link>
				})}
			</div>
		</div>


		{/*<Footer />*/}
	</div>;
};

module.exports = HomePage;