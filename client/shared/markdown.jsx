const React       = require('react');
const createClass = require('create-react-class');
const Marked = require('marked');

/*
const kebobCase = (string)=>string.toLowerCase().replace(/[^\w]+/g, '-')

renderer.heading = (text, level)=>{
	//TODO: should only limit anchors to h1,h2,h3?
	const id = kebobCase(text);
	return `<h${level}><a class='hook' aria-hidden='true' href='#${id}'>#</a><div class='anchor' aria-hidden='true' id='${id}'></div>${text}</h${level}>\n`;
};
*/


module.exports = ({ className, content, children, ...props })=>{
	return <div
		className={`Markdown ${className}`}
		dangerouslySetInnerHTML={{__html:Marked(content || children)}}
		{...props}
	/>
};