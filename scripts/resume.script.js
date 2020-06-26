//const ReactDOMServer = require('react-dom/server');
//const React = require('react');
const puppeteer = require('puppeteer-core');
const Less = require('less');
const fse = require('fs-extra');

const md = require('pico-md');


const CHROME_PATH = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

//const Resume = require('./resume.component.js');
//const config = require('../config');


/*
body {
	margin      : 0;
	font-size   : 1em;
	font-weight : 300;
	color       : #1D1313;
}
@page {
	margin: 0px;
}
*{
	box-sizing : border-box;
}
*/

const resumeRoot = `./client/main/resume`



const getHtml = async ()=>{
	const content = await fse.readFile(`${resumeRoot}/resume.md`, 'utf8');
	const less = await fse.readFile(`${resumeRoot}/resume.less`, 'utf8');
	const style = await Less.render(less, {paths : resumeRoot});
	const html = `<html>
		<style type="text/css">
			body {
				margin      : 0;
				font-size   : 1em;
				font-weight : 300;
				color       : #1D1313;
			}
			@page {
				margin: 0px;
			}
			*{
				box-sizing : border-box;
			}
		</style>
		<style type="text/css">${style.css}</style>
		<div class='resume'>${md(content, {allowHtml : true})}</div>
	</html>`
	return html;
};

const createPDF = async ()=>{
	const browser = await puppeteer.launch({ executablePath : CHROME_PATH });
	const page = await browser.newPage();
	await page.setContent(await getHtml());
	/* https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions */
	await page.pdf({ path : `${resumeRoot}/Scott Tolksdorf - resume.pdf` })
	await browser.close();
}



createPDF()
	.then(()=>console.log(`created resume PDF at ${resumeRoot}/Scott Tolksdorf - resume.pdf`))
	.catch((err)=>console.error(`ERROR: Could not create resume pdf`, err));