require('./main.less');
const React       = require('react');
const { Title } = require('vitreum/headtags');

const Footer = require('./footer/footer.jsx');

const Routes = require('shared/routes.js').main;

const {CreateRouter, Link} = require('pico-router');

const HomePage = require('./homePage/homePage.jsx');
const ResumePage = require('./resumePage/resumePage.jsx');
const TutoringPage = require('./tutoringPage/tutoringPage.jsx');


const Router = CreateRouter({
	[Routes.home] : <HomePage />,
	//[Routes.home] : <div>HOME  <Link href={Routes.resume}>Resume</Link></div>,
	[Routes.resume] : <ResumePage />,
	[Routes.tutoring] : <TutoringPage />,
	[Routes.notFound] : <div>not found</div>
});


function Main({url='/'}){
	console.log('rendering');
	return <div className='Main'>
		<Title>Scott Tolksdorf</Title>
		<Router defaultUrl={url} />
	</div>
}

module.exports = Main;