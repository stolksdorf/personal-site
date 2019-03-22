const React    = require('react');
const Markdown = require('./index.js');

const Markdown = ({ content, children, className, ...props})=>{
	const __html = Markdown(content || children, { renderer })
	return React.createElement('div', {
		className : `Markdown ${className}`,
		dangerouslySetInnerHTML : {__html},
		...props
	})
}

module.exports = Markdown;