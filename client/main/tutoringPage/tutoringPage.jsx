require('./tutoringPage.less');
const React = require('react');
const Routes = require('shared/routes.js').main;
const request = require('superagent');


const useStatefulStorage = (key, initial)=>{
	const [data, setData] = React.useState(initial);
	React.useEffect(()=>{
		try{
			const storage = localStorage.getItem(key);
			if(storage) setData(JSON.parse(storage));
		}catch(err){}
	}, []);
	return [
		data,
		(newData)=>{
			localStorage.setItem(key, JSON.stringify(newData));
			setData(newData);
		}
	]
};

const useAsyncState = (asyncFunc)=>{
	const [data, setData] = React.useState();
	const [status, setStatus] = React.useState('ready');
	return [
		data,
		status,
		(...args)=>{
			setStatus('pending');
			return asyncFunc(...args)
				.then((data)=>{
					setStatus('complete');
					setData(data);
					return data;
				})
				.catch((err)=>{
					setStatus('error');
					setData(err);
				});
		}
	]
};

function TutoringPage({ ...props }){
	const [form, updateForm] = useStatefulStorage('email_form', {
		email   : '',
		subject : 'Scott it the best!',
		body    : 'ye ye ye'
	});
	const updateField = (fieldName, value)=>{
		updateForm({ ...form, [fieldName] : value});
	};

	const [response, status, sendEmail] = useAsyncState(()=>{
		return request.post(Routes.api.sendMail).send(form);
	});

	return <div className={`TutoringPage`} {...props}>

		<div className='form'>
			<div className='field'>
				<label>email</label>
				<input type='text' value={form.email} onChange={(evt)=>updateField('email', evt.target.value)} />
			</div>
			<div className='field'>
				<label>subject</label>
				<input type='text' value={form.subject} onChange={(evt)=>updateField('subject', evt.target.value)} />
			</div>
			<div className='field'>
				<label>body</label>
				<input type='text' value={form.body} onChange={(evt)=>updateField('body', evt.target.value)} />
			</div>
		</div>
		<div className='controls'>
			{status === 'ready' &&
				<button onClick={sendEmail}>Send</button>
			}
			{status === 'pending' &&
				<div className='pending'>we sending it</div>
			}
			{status === 'error' &&
				<div className='error'>{response.toString()}</div>
			}
			{status === 'complete' &&
				<div>Sent!</div>
			}
		</div>
	</div>
};

module.exports = TutoringPage;