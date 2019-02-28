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
desc      : This is a new post
published : false
draft     : true
created   : ${new Date().toISOString().split('T')[0]}
updated   : ${new Date().toISOString().split('T')[0]}
tags:
  - js
  - personal
  - coding
  - thoughts
---

# ${PostName}

`;

fse.outputFileSync(`./posts/${postName}.md`, file);

console.log('Created!');
