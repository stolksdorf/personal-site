require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const ResumePage = require('./resumePage/resumePage.jsx');

const Main = createClass({
	displayName : 'Main',
	getDefaultProps(){
		return {
		};
	},
	render(){
		return <div className='Main'>
			<ResumePage />
		</div>;
	}
});

module.exports = Main;