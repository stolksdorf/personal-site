require('./resumePage.less');
const React       = require('react');
const cx          = require('classnames');
//const Markdown = require('shared/markdown.jsx');
const Markdown = require('pico-md/component');



const resumeText = require('../../../resume/resume.md');
const downloadLink = require('../../../resume/resume.pdf');

/* Theme */
require('../../../resume/latex.less');


function ResumePage({ style = 'latex'}){
	return <div className='ResumePage'>

		<div className='download no-print'>
			<a href={downloadLink}> download </a>
		</div>


		<div className={`container ${style}`}>
			<Markdown content={resumeText} />
		</div>
	</div>
};

module.exports = ResumePage;