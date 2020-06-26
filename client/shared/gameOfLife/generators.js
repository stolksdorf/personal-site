
const {fromCoord} = require('./gol.engine.js');

function Glider(){return null;}
function Cross(){return null;}
function Square(){return null;}
function Line(){return null;}


const generators = {
	[Glider] : ({x = 0, y = 0, dir = 1}) => [
		[x + (2 * dir), y + 0],
		[x + (1 * dir), y + 0],
		[x + (0 * dir), y + 0],
		[x + (1 * dir), y + 2],
		[x + (0 * dir), y + 1],
	],
	[Cross] : ({x = 0, y = 0}) => [
		[x + 0, y + 0],
		[x + 1, y + 0],
		[x + 1, y + 1],
		[x + 2, y + 0],
		[x + 1, y - 1],
	],
	[Square] : ({x = 0, y = 0}) => [
		[x + 0, y + 0],
		[x + 1, y + 0],
		[x + 0, y + 1],
		[x + 1, y + 1],
	],
	[Line] : ({x = 0, y = 0}) => [
		[x + 0, y + 0],
		[x + 1, y + 0],
		[x + 2, y + 0],
	],
};


const getInitialSet = (children)=>{
	if(!Array.isArray(children)) children = [children];
	return children.reduce((acc, child)=>{
		if(generators[child.type]) return acc.concat(generators[child.type](child.props));
		return acc;
	}, []).map(([x,y])=>fromCoord({x,y}));
};


module.exports = {
	getInitialSet,
	Glider,
	Cross,
	Square,
	Line,
}