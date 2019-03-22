const ReactDOMServer = require('react-dom/server');
const React = require('react');
const puppeteer = require('puppeteer-core');
const Less = require('less');
const fs = require('fs');


const Resume = require('./resume.component.js');
const config = require('../config');



const getHtml = async (theme)=>{
	const content = fs.readFileSync('./resume/resume.md', 'utf8');
	const style = await Less.render(fs.readFileSync(`./resume/${theme}.less`, 'utf8'), {paths : './resume'});
	const html = `<html><style type="text/css">${style.css}</style>
			<div class='container'>${ReactDOMServer.renderToString(React.createElement(Resume, {content}))}</div></html>`
	return html;
};

const createPDF = async ()=>{
	const browser = await puppeteer.launch({ executablePath : config.get('chrome_path') });
	const page = await browser.newPage();
	await page.setContent(await getHtml('latex'));
	/* https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions */
	await page.pdf({ path : 'resume/resume.pdf' })
	await browser.close();
}

createPDF()
	.then(()=>console.log('created resume PDF at ./resume/resume.pdf'))
	.catch(()=>console.error('ERROR: Could not create resume pdf'));