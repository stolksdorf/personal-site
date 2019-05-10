
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


module.exports = {
	toCoord,
	fromCoord,
	exists,
	kill,
	grow,
	update,
	step,
}