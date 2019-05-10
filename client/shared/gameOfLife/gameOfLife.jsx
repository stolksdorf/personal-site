require('./gameOfLife.less');
const React       = require('react');

const Generators = require('./generators.js');
const Engine = require('./gol.engine.js');

const useClickDrag = (func)=>{
	const [clicked, setClick] = React.useState(false);
	return {
		onMouseDown : (evt)=>{setClick(true); func(evt, true);},
		onMouseUp   : ()=>setClick(false),
		onMouseMove : (evt)=>clicked && func(evt),
	}
};

let timer;

function GameOfLife({pixelSize=15, delay=2000, children}){
	const iniitalSet = Generators.getInitialSet(children);
	const [cells, setCells] = React.useState(new Set(iniitalSet));
	const updateCells = (set)=>setCells(new Set(set));
	const executeStep = ()=>updateCells(Engine.step(cells));

	// React.useEffect(()=>{
	// 	const timer = setInterval(()=>executeStep(), delay);
	// 	return ()=>clearInterval(timer);
	// });

	global.step = ()=>updateCells(Engine.step(cells));
	if(!timer) timer = setInterval(()=>global.step(), delay);

	const renderCells = ()=>{
		return Array.from(cells).map((key)=>{
			const {x,y} = Engine.toCoord(key);
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

	const [lastCellState, setLastCellState] = React.useState(false);
	const dragEvents = useClickDrag((evt, onDown)=>{
		const coord = getPos(evt);
		if(onDown) setLastCellState(!Engine.exists(cells, coord));
		updateCells(Engine.update(cells, coord, lastCellState));
	});

	return <div className='GameOfLife' ref={ref} {...dragEvents}>
		{renderCells()}
	</div>
};

module.exports = {
	GameOfLife,
	...Generators
}
