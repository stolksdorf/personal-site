require('./resumePage.less');

const React = require('react');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('pico-md/component.js');

//TODO: Break this into a resume component, maybe in shared
// Should be able to render as static right into the PDF generator

const ResumePage = function(){
	return <div className='ResumePage'>
		<Markdown content={resumeText} />
	</div>;
}


module.exports = ResumePage;