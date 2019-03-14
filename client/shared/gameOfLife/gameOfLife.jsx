/* eslint-disable max-params */
/* NeightbourReduce is pretty mathy, I need the parameter to define the behaviour well */

const map    = (obj,fn)=>Object.keys(obj).map((key, idx)=>fn(obj[key], key, idx));
const reduce = (obj,fn,init)=>Object.keys(obj).reduce((acc, key, idx)=>{return fn(acc, obj[key], key, idx); }, init);

require('./gameOfLife.less');
const React       = require('react');
const createClass = require('create-react-class');
//const _           = require('lodash');

/** Common Game Of Life Generators **/
const generators = {
	glider : (x = 0, y = 0, dir = 1) => [
		[x + (2 * dir), y + 0],
		[x + (1 * dir), y + 0],
		[x + (0 * dir), y + 0],
		[x + (1 * dir), y + 2],
		[x + (0 * dir), y + 1],
	],
	cross : (x = 0, y = 0) => [
		[x + 0, y + 0],
		[x + 1, y + 0],
		[x + 1, y + 1],
		[x + 2, y + 0],
		[x + 1, y - 1],
	],
};




const neighbourMap = (coord,fn)=>{
	const arr = [-1,0,1];
	let res = [];
	arr.map((dx)=>arr.map((dy)=>res.push(fn({x:x+dx, y:y+dy}))));
	return res;
};



const gol = ()=>{
	const coord = (val)=>{
		const [x,y] = val.split(',');
		return {x,y};
	}
	const getNeighbourCount=(coord)=>{
		let count = 0;
		neighbourMap(coord, (coord)=>{
			if(gol.get(coord)) count++;
		});
		return count;
	};


	const gol = {
		state : new Set(),
		get : ({x,y})=>state.has(`${x},${y}`),
		set : (x,y,val)=>{
			val
				? gol.state.add(`${x},${y}`)
				: gol.state.delete(`${x},${y}`);
		},
		all : ()=>gol.state.values.map(coord),
		step : ()=>{
			let res = new Set();

			gol.all().map((coord)=>{

			})

			gol.state.values().map(()=>{

			})
			Array.from(gol.state).each(())


		},

		flip : (x, y)=>{
			gol.set(x,y,!gol.get(x,y));
		},
		toggleCell : (x,y)=>{

		}
	}
	return gol;
}





const GameOfLife = createClass({
	getDefaultProps : function(){
		return {
			delay      : 800,
			pixelSize  : 15,
			initialMap : generators.glider(0, 0),
		};
	},
	getInitialState : function() {
		return {
			clicked : false,
			map     : reduce(this.props.initialMap, (acc, coord) => {
				acc[`${coord[0]},${coord[1]}`] = true;
				return acc;
			}, {}),
		};
	},
	componentDidMount : function() {
		setInterval(() => this.iterate(), this.props.delay);
	},
	iterate : function() {
		const kill = (state, x, y) => {
			delete state[`${x},${y}`];
			return state;
		};
		const live = (state, x, y) => {
			state[`${x},${y}`] = true;
			return state;
		};
		const read = (state, x, y) => state[`${x},${y}`];
		const get = (key) => {
			const [x, y] = key.split(',');
			return { x: x * 1, y: y * 1 };
		};

		const getNeighbourCount = (state, x, y) => {
			return neighbourReduce(state, x, y, (acc, status, cx, cy) => {
				if(cx == x && cy == y) return acc;
				if(status) return acc + 1;
				return acc;
			}, 0);
		};

		// FIXME: Cleanup the number of params
		const neighbourReduce = (state, x, y, fn, acc) => {
			return reduce([-1, 0, 1], (acc, modx) => {
				return reduce([-1, 0, 1], (acc, mody) => {
					return fn(acc, read(state, x + modx, y + mody), x + modx, y + mody);
				}, acc);
			}, acc);
		};

		const calcBlock = (state, newState, x, y) => {
			const count = getNeighbourCount(state, x, y);
			const status = read(state, x, y);
			if(count < 2 || count > 3) newState = kill(newState, x, y);
			if(count == 3 && !status) newState = live(newState, x, y);
			return newState;
		};

		//let newState = clone(this.state.map);
		let newState = this.state.map;

		newState = reduce(this.state.map, (acc, val, key) => {
			const { x, y } = get(key);
			return neighbourReduce(acc, x, y, (acc, status, cx, cy) => {
				// TODO: add conditional on new state to check agsint doing logic
				// TODO: Add bounds check so it dones;t run off into infitity
				return  calcBlock(this.state.map, acc, cx, cy);
			}, acc);

		}, newState);
		this.setState({ map: newState });
	},

	clickMap : function(evt) {
		console.log('yo');
		const x = Math.floor((evt.nativeEvent.offsetX - this.refs.gameOfLife.offsetWidth / 2) / this.props.pixelSize);
		const y = Math.floor((evt.nativeEvent.offsetY - this.refs.gameOfLife.offsetHeight / 2) / this.props.pixelSize);

		this.state.map[`${x},${y}`] = !this.state.map[`${x},${y}`];
		this.setState(this.state);
	},

	handleMouseMove : function(evt) {
		if(!this.state.clicked) return;
		this.clickMap(evt);
	},
	renderBlocks : function() {
		const size = this.props.pixelSize;
		return map(this.state.map, (val, key) => {
			const [x, y] = key.split(',');
			return <div
				key={key}
				className='block'
				style={{
					transform : `translate(${x * size}px, ${y * size}px)`,
					height    : `${size - 1}px`,
					width     : `${size - 1}px`,
				}} />;
		});
	},

	render : function(){
		return <div className='GameOfLife'
			onMouseDown={(evt) => {this.clickMap(evt);this.setState({ clicked: true });}}
			onMouseUp={() => this.setState({ clicked: false })}
			onMouseMove={this.handleMouseMove}
			ref='gameOfLife'>
			{this.renderBlocks()}
		</div>;
	},
});

GameOfLife.gen = generators;


module.exports = GameOfLife;
