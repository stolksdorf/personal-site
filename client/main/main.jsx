require('./main.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');


const {createRouter} = require('pico-router');

const ResumePage = require('./resumePage/resumePage.jsx');



const Router = createRouter({
	'/resume' : (args, query)=>{
		return <ResumePage style={query.style} />
	},
});


const Main = createClass({
	displayName : 'Main',
	getDefaultProps(){
		return {
		};
	},
	render(){
		return <div className='Main'>
			<Router defaultUrl={this.props.url} />
		</div>;
	}
});

module.exports = Main;