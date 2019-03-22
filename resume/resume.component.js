const React       = require('react');
const md = require('pico-md/component');


const renderer = {
	heading : (text, level, raw)=>{
		if(level == 2){
			return `</section>\n`
				+ `<section class='${text.toLowerCase()}'>\n`
				+ `<h${level}>${text}</h${level}>\n`
		}

		return `<h${level}>${text}</h${level}>\n`;
	}
}


module.exports = ({content})=>{
	return md({
		content : content,// + '\n</section>',
		options : {
			renderer,
			allowHtml : true
		}
	})
}