const puppeteer = require('puppeteer-core');
const marked = require('marked');
const Less = require('less');
const fs = require('fs');


const getHtml = async (theme)=>{
	const Resume = marked(fs.readFileSync('./resume/resume.md', 'utf8'));
	const style = await Less.render(fs.readFileSync(`./resume/${theme}.less`, 'utf8'), {paths : './resume'});
	const html = `<html><style type = "text/css">${style.css}</style>
			<div class='container'><div class='resume ${theme}'>${Resume}</div></div></html>`
	return html;
};

const createPDF = async ()=>{
	const browser = await puppeteer.launch({
		executablePath : 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
	});
	const page = await browser.newPage();
	await page.setContent(await getHtml('latex'));
	await page.pdf({
		//https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions
		path : 'resume/resume.pdf'
	})
	await browser.close();
}

createPDF()
	.then(()=>console.log('created resume PDF at ./resume/resume.pdf'))
	.catch(()=>console.error('ERROR: Could not create resume pdf'));