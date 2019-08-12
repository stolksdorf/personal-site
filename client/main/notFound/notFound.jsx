require('./notFound.less');
const React = require('react');


function Spin({children, speed=400, delay=2000, ...props}){
	const parts = 100;
	const scale = 100;
	const [dx, setDX] = React.useState(0);
	const [dy, setDY] = React.useState(0);
	const [rot, setRot] = React.useState(0);

	const go = ()=>{
		setDX(Math.floor(Math.random() * parts) - parts/2);
		setDY(Math.floor(Math.random() * parts) - parts/2);
		setRot(Math.floor(Math.random() * 360));
	}

	React.useEffect(()=>{
		setTimeout(go, 4000);
	}, [])
	return <div className='spin' onMouseEnter={go} style={{
		display : 'inline-block',
		transition : `transform ${speed}s linear`,
		transform : `translate(${dx * scale}px, ${dy * scale}px) rotate(${rot}deg)`,
	}}>
		{children}
	</div>
};

function Breakpart({text, ...props}){
	return text.split('').map((letter, idx)=><Spin {...props} key={idx}>{letter}</Spin>);
}


function NotFound({ ...props }){
	return <div className={`NotFound`} {...props}>

		<div className='content'>
			<h1><Breakpart text='404' /></h1>
			<h3><Breakpart text='This is a subtitle' /></h3>
		</div>

	</div>;
};

module.exports = NotFound;