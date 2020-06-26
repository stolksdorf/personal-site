require('./homePage.less');
const React = require('react');

const Routes = require('shared/routes.js');

const {Link} = require('pico-router');

const Footer = require('../footer/footer.jsx');

const Colors = require('../colors.js')

const buttons = require('./buttons.js')


//https://nicepage.com/doc/article/20348/web-design-3-0-when-your-web-design-really-matters





const Verbs = [
	'build',
	'design',
	'architct',
	'create',
	'cobble together',
	'ship'
];

const Projects = [
	'Slack Bots',
	'D&D Tools',
	'Nerdy Things',
]







const {GameOfLife, Glider, Line, Square} = require('shared/gameOfLife/gameOfLife.jsx');
function GOL(){
	return <GameOfLife delay={200} pixelSize={12}>
		<Line y={40}/>
		<Glider x={5} y={20} dir={-1} />
		<Glider x={20} y={35} dir={1} />
		<Square x={-15} y={30} dir={-1} />
	</GameOfLife>
}



function Button({icon, color, text, href, ...props}){

	return <Link className={`button ${color}`} href={href} key={text}>
		<i className={`fa fa-fw fa-${icon}`} />
		<span>{text}</span>

	</Link>

	return <button className='hint--bottom-right' {...props} key={text} aria-label='test this is a longer piece of text'>
		<i className={`fa fa-fw fa-${icon}`} />
		<span>{text}</span>
	</button>

}

function Subheader(){
	return <p>
		I Build Things
	</p>

}


const links = [
	// {
	// 	text : "About",
	// 	url : Routes.main.about,
	// },
	{
		text : "Resume",
		url : Routes.main.resume,
	},
	// {
	// 	text : "Blog",
	// 	url : Routes.main.blog,
	// },
	// {
	// 	text : "Projects",
	// 	url : Routes.main.projects,
	// },
	{
		text : "Github",
		url : Routes.external.github
	},


]


function HomePage(){
	return <div className={`HomePage`}>
		<div className='content'>
			<h1>Scott Tolksdorf</h1>
			<nav>
				{links.map(({text, url})=>{
					return <Link href={url} key={text}>{text}</Link>
				})}
			</nav>
		</div>
		<GOL />
	</div>;
};

module.exports = HomePage;