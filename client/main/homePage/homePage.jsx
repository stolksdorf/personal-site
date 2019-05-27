require('./homePage.less');
const React = require('react');

const Routes = require('shared/routes.js');

const {Link} = require('pico-router');

const Footer = require('../footer/footer.jsx');

const Colors = require('../colors.js')

const buttons = require('./buttons.js')


//https://nicepage.com/doc/article/20348/web-design-3-0-when-your-web-design-really-matters



const {GameOfLife, Glider, Line, Square} = require('shared/gameOfLife/gameOfLife.jsx');
function GOL(){
	return <GameOfLife delay={800} pixelSize={12}>
		<Line y={40}/>
		<Glider x={5} y={20} dir={-1} />
		<Glider x={20} y={35} dir={1} />
		<Square x={-15} y={30} dir={-1} />
	</GameOfLife>
}



function Button({icon, color, text, ...props}){

	return <button {...props} key={text}>
		<i className={`fa fa-fw fa-${icon}`} />
		<span>{text}</span>
	</button>

}


function HomePage(){
	return <div className={`HomePage`}>

		<div className='content'>

			<header>
				<div className='card' style={{backgroundColor : Colors['red']}}>
					<i className='fa fa-fw fa-rocket' />
				</div>
				<h1>Scott Tolksdorf</h1>
				<p>Really good at stuff</p>

				<div className='buttons'>
					{buttons.map(Button)}
				</div>

			</header>




		</div>




	</div>;
};

module.exports = HomePage;