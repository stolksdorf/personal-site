require('./resumePage.less');
require('../resume/resume.less');
const React       = require('react');
const Markdown = require('pico-md/component');

const { Title } = require('vitreum/headtags');

const resumeText = require('../resume/resume.md');
const downloadLink = '/' + require('../resume/Scott Tolksdorf - resume.pdf');



function ResumePage(){
	return <div className='ResumePage'>
		<Title>Resume - Scott Tolksdorf</Title>
		<div className='links no-print'>
			<a href={downloadLink}>
				<i className='fa fa-fw fa-cloud-download' />
			</a>
			<a onClick={()=>window.print()}>
				<i className='fa fa-fw fa-print' />
			</a>
		</div>
		<div className={`container`}>
			<Markdown
				className='resume'
				content={resumeText}
				options={{ allowHtml : true }}
			/>
		</div>
	</div>
};

module.exports = ResumePage;