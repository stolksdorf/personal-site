require('./main.less');
const React       = require('react');

const Routes = require('shared/routes.js').main;

const {CreateRouter, Link} = require('pico-router');

//const HomePage = require('./homePage/homePage.jsx');
const ResumePage = require('./resumePage/resumePage.jsx');
const TutoringPage = require('./tutoringPage/tutoringPage.jsx');


const Router = CreateRouter({
	//[Routes.home] : <HomePage />,
	[Routes.home] : <div>HOME  <Link href={Routes.resume}>Resume</Link></div>,
	[Routes.resume] : <ResumePage />,
	[Routes.tutoring] : <TutoringPage />,
	[Routes.notFound] : <div>not found</div>
});


const Main = function({ url }){
	return <div className='Main'>
		<nav>nav goes here</nav>
		<Router defaultUrl={url} />
		<footer>footer goes here</footer>
	</div>
}

module.exports = Main;