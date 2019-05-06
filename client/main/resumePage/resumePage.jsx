require('./resumePage.less');
const React       = require('react');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('pico-md/component.js');



const ResumePage = function(){
	return <div className='ResumePage'>
		<Markdown content={resumeText} />

		asdsad
	</div>;
}

module.exports = ResumePage;