require('./main.less');
const React       = require('react');

const HomePage = require('./homePage/homePage.jsx');
const ResumePage = require('./resumePage/resumePage.jsx');

const Routes = require('shared/routes.js');

const { Title } = require('vitreum/headtags');

const Router = require('pico-router').createRouter({
	[Routes.home]     : <HomePage />,
	[Routes.resume]   : <ResumePage />,
	[Routes.notFound] : <div>not found</div>
});


function Main({url='/'}){
	return <div className='Main'>
		<Title>Scott Tolksdorf</Title>

		<Router defaultUrl={url} />
	</div>;
}

module.exports = Main;