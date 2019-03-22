const React       = require('react');
const md = require('pico-md/component');

const renderer = {
	heading : (text, level, raw)=>{
		if(level == 2){
			return `\n</section>\n`
				+ `<section class='${text.toLowerCase()}'>\n`
				+ `<h${level}>${text}</h${level}>\n`
		}

		return `<h${level}>${text}</h${level}>\n`;
	}
}


module.exports = ({content})=>{
	return md({
		content : content+ '\n</section>',
		className : 'resume',
		options : {
			renderer,
			allowHtml : true
		}
	})
}