const fse = require('fs-extra');
const shortid = require('shortid');

const snakeCase = (text)=>text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '_');
const titleCase = (text)=>text.replace(/\w\S*/g, (txt)=>txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase());

const postname = process.argv[2];
if(!postname){
	console.log('Usage: npm run-script post "[name]"');
	process.exit(1);
}

const file = `---
id        : ${shortid()}
title     : ${titleCase(postname)}
desc      : This is a new post
published : false
created   : ${new Date().toISOString().split('T')[0]}
tags:
  - js
  - personal
  - coding
  - thoughts
---

# ${titleCase(postname)}

`;

fse.outputFileSync(`./posts/${snakeCase(postname)}.md`, file);

console.log('Created!', `./posts/${snakeCase(postname)}.md`);
