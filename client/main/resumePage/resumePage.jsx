require('./resumePage.less');
const React       = require('react');
const Markdown = require('pico-md/component');
const Resume = require('../../../resume/resume.component.js');

const resumeText = require('../../../resume/resume.md');
const downloadLink = require('../../../resume/resume.pdf');

/* Theme */
require('../../../resume/latex.less');


function ResumePage(){
	return <div className='ResumePage'>
		<div className='download no-print'>
			<a href={downloadLink}> download </a>
		</div>
		<div className={`container`}>
			<Resume content={resumeText} />
		</div>
	</div>
};

module.exports = ResumePage;