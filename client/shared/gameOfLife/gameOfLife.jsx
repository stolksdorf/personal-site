/* eslint-disable max-params */
/* NeightbourReduce is pretty mathy, I need the parameter to define the behaviour well */

const map    = (obj,fn)=>Object.keys(obj).map((key, idx)=>fn(obj[key], key, idx));
const reduce = (obj,fn,init)=>Object.keys(obj).reduce((acc, key, idx)=>{return fn(acc, obj[key], key, idx); }, init);

require('./gameOfLife.less');
const React       = require('react');
//const _           = require('lodash');

/** Common Game Of Life Generators **/

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


/* ------------------- */

const toCoord = (val)=>{
	const [x,y] = val.split(',');
	return {x:Number(x),y:Number(y)};
}
const fromCoord = (obj)=>`${obj.x},${obj.y}`;
const neighbourMap = ({x,y},fn)=>{
	[-1,0,1].map((dx)=>{
		[-1,0,1].map((dy)=>{
			fn({x:x+dx, y:y+dy})
		})
	});
};
const getNeighbourCount=(set, coord)=>{
	let acc = 0;
	neighbourMap(coord, (_coord)=>{
		acc += (exists(set, _coord) ? 1 : 0)
	}, 0)
	return acc - (exists(set, coord) ? 1 : 0)
};

const exists  = (set, coord)=>set.has(fromCoord(coord));
const kill    = (set, coord)=>{set.delete(fromCoord(coord)); return set;};
const grow    = (set, coord)=>set.add(fromCoord(coord));
const update  = (set, coord, val)=>val ? grow(set,coord) : kill(set,coord);
//const all     = (set)=>Array.from(set).map(toCoord);

const step = (set)=>{
	let res = new Set();
	Array.from(set).map((key)=>{
		const pivotCoord = toCoord(key);
		neighbourMap(pivotCoord, (coord)=>{
			const count = getNeighbourCount(set, coord);
			const isAlive = exists(set, coord);
			if(!isAlive && count == 3) res = grow(res, coord);
			if(isAlive && (count == 2 || count == 3)) res = grow(res, coord);
		});
	})
	return res;
};

/* --------------------- */




const useClickDrag = (func)=>{
	const [clicked, setClick] = React.useState(false);
	return {
		onMouseDown : (evt)=>{setClick(true); func(evt, true);},
		onMouseUp   : ()=>setClick(false),
		onMouseMove : (evt)=>clicked && func(evt),
	}
};

const processChildren = (children)=>{
	if(!Array.isArray(children)) children = [children];
	return children.reduce((acc, child)=>{
		if(generators[child.type]) return acc.concat(generators[child.type](child.props));
		return acc;
	}, []).map(([x,y])=>fromCoord({x,y}));
};

let timer;

function GameOfLife({pixelSize=15, delay=2000, children}){
	const [cells, setCells] = React.useState(new Set(processChildren(children)));
	const updateCells = (set)=>setCells(new Set(set));
	const executeStep = ()=>updateCells(step(cells));

	// React.useEffect(()=>{
	// 	const timer = setInterval(()=>executeStep(), delay);
	// 	return ()=>clearInterval(timer);
	// });

	if(!timer) timer = setInterval(()=>global.step(), delay);

	const renderCells = ()=>{
		return Array.from(cells).map((key)=>{
			const {x,y} = toCoord(key);
			return <div
				key={`${x}-${y}`}
				className='cell'
				style={{
					transform : `translate(${x * pixelSize}px, ${y * pixelSize}px)`,
					height    : `${pixelSize - 1}px`,
					width     : `${pixelSize - 1}px`,
				}} />;
		});
	};


	const ref = React.useRef();
	const getPos = (evt)=>{
		const x = Math.floor((evt.nativeEvent.offsetX - ref.current.offsetWidth / 2) / pixelSize);
		const y = Math.floor((evt.nativeEvent.offsetY - ref.current.offsetHeight / 2) / pixelSize);
		return {x,y};
	}

	global.step = ()=>updateCells(step(cells));

	const [lastCellState, setLastCellState] = React.useState(false);
	const dragEvents = useClickDrag((evt, onDown)=>{
		const coord = getPos(evt);
		if(onDown) setLastCellState(!exists(cells, coord));
		updateCells(update(cells, coord, lastCellState));
	});

	return <div className='GameOfLife' ref={ref} {...dragEvents}>
		{renderCells()}
	</div>
};

module.exports = {
	GameOfLife,
	Glider,
	Cross,
	Square,
	Line,
}
