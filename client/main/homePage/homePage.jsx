require('./homePage.less');
const React = require('react');

function HomePage({ ...props }){
	return <div className={`HomePage`} {...props}>
		HomePage Component Ready.

	</div>;
};

module.exports = HomePage;