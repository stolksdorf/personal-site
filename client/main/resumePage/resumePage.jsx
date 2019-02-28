require('./resumePage.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('shared/markdown.jsx');



const ResumePage = createClass({
	displayName : 'ResumePage',
	getDefaultProps(){
		return {
		};
	},
	render(){
		return <div className='ResumePage'>
			<Markdown content={resumeText} />
		</div>;
	}
});

module.exports = ResumePage;