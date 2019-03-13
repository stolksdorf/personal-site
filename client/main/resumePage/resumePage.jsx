require('./resumePage.less');
const React = require('react');

const resumeText = require('../../../resume/resume.md');

const Markdown = require('shared/markdown.jsx');

//TODO: Break this into a resume component, maybe in shared
// Should be able to render as static right into the PDF generator


function ResumePage({ ...props }){
	return <div className={`ResumePage`} {...props}>
		<Markdown content={resumeText} />
	</div>;
};

module.exports = ResumePage;