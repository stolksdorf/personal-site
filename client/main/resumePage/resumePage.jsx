require('./resumePage.less');
const React       = require('react');
const cx          = require('classnames');
const Markdown = require('shared/markdown.jsx');



const resumeText = require('../../../resume/resume.md');
const downloadLink = require('../../../resume/resume.pdf');

/* Theme */
require('../../../resume/latex.less');


function ResumePage({ style = 'latex'}){
	return <div className='ResumePage'>

		<div className='download no-print'>
			<a href={downloadLinks}> download </a>
		</div>


		<div className={`container ${style}`}>
			<Markdown content={resumeText} />
		</div>
	</div>
};

module.exports = ResumePage;