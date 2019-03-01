require('./resumePage.less');
const React       = require('react');
const cx          = require('classnames');

require('../../../resume/resume.main.less');
require('../../../resume/latex.less');
require('../../../resume/fancy.less');
require('../../../resume/pretty.less');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('shared/markdown.jsx');

const downloadLinks = {
	latex : require('../../../resume/pdf/latex.pdf'),
	fancy : require('../../../resume/pdf/fancy.pdf'),
	pretty : require('../../../resume/pdf/pretty.pdf'),
}


function ResumePage({ style = 'latex'}){
	return <div className='ResumePage'>
		<div className='links no-print'>
			<a href='/resume?style=latex'>latex</a>
			<a href='/resume?style=fancy'>fancy</a>
			<a href='/resume?style=pretty'>pretty</a>
		</div>

		<div className='download no-print'>
			<a href={downloadLinks[style]}> download </a>
		</div>


		<div className={`container ${style}`}>
			<Markdown content={resumeText} />
		</div>
	</div>
};

module.exports = ResumePage;