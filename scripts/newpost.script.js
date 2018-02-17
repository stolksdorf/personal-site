const fse = require('fs-extra');
const _ = require('lodash');

const postname = process.argv[2];
if(!postname){
	console.log('Usage: npm run-script post [name]');
	process.exit(1);
}
const postName = _.snakeCase(postname);
const PostName = _.startCase(postname);

const file = `---
title     : ${PostName}
tags      : temp,test
published : ${new Date().toISOString()}
updated   : ${new Date().toISOString()}
---

# ${PostName}

`;

fse.outputFileSync(`./posts/${postName}.md`, file);

console.log('Created!');
