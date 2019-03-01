const fs = require('fs');
const wkhtmltopdf = require('wkhtmltopdf');
const marked = require('marked');
const Less = require('less')

const Resume = marked(fs.readFileSync('./resume/resume.md', 'utf8'));

const run = async (theme)=>{
	const style = await Less.render(fs.readFileSync(`./resume/${theme}.less`, 'utf8'), {paths : './resume'});
	const html = `<style>${style.css}</style>
			<div class='container'><div class='resume ${theme}'>${Resume}</div></div>`

	wkhtmltopdf(html, {
		output: `./resume/pdf/${theme}.pdf`,
		printMediaType : true,
		marginBottom : '0mm',
		marginLeft : '0mm',
		marginRight : '0mm',
		marginTop : '0mm',
	})
};

run('latex').catch((err)=>console.log(err))
run('pretty').catch((err)=>console.log(err))
run('fancy').catch((err)=>console.log(err))