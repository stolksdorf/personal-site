require('./main.less');
const React       = require('react');
const cx          = require('classnames');

const ResumePage = require('./resumePage/resumePage.jsx');

const Main = function(){
	return <div className='Main'>
		<ResumePage />
		this is a test
	</div>;
}

module.exports = Main;