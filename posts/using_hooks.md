---
id        : 6C1ubUzhj
title     : Using Hooks
desc      : This is a new post
published : false
created   : 2019-04-15
tags:
  - js
  - personal
  - coding
  - thoughts
---

# Using Hooks

okay so react hooks are super fun

I _love_ that you can compose them
so I was building an email form that I wanted to use local storage incase something went wrong and the person wanted to recover their email they composed.

scott [12:23]
without hooks I'd have to wire all that into the `componentDidMount` and what not. *But* with hooks I can now write a generic and external function that provides that capability.

```jsx
function TutoringPage({ ...props }){
	const [form, updateForm] = useStatefulStorage('email_form', {
		email : '',
		subject : 'Scott it the best!',
		body : 'ye ye ye'
	});

	const updateField = (fieldName, value)=>{
		updateForm({ ...form, [fieldName] : value});
	};

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
	</div>
};

module.exports = TutoringPage;
```



```js
const useStatefulStorage = (key, initial)=>{
	const [data, setData] = React.useState(initial);
	React.useEffect(()=>{
		try{
			setData(JSON.parse(localStorage.getItem(key)));
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


```








> I assume at the top of `the form.js`, you simply require in `the storage hook.js`?

Right now they are just in the same file because I'm just tinkering. But you could totally externalize it and require it in. This level of composibility is exactly why the team developed Hooks.

> What is the purpose of `setData` from `React.useState`?

Whenever `setData` is called it will trigger a re-render of the component it was called from. React Hooks have a little bit of magic where React "knows" which `setData` belongs to which component. That `setData` will update React's internal state for that specific component, and when it goes to re-render `data` will be popualted with whatever is in React's internal state.

> Why do you have to wrap the population of your state from local storage inside `useEffect`?  What does it do?

`useEffect` let's you set up side effects for your component, stuff that needs to happen that doesn't affect the rendering. It's one concept that now wraps _a lot_ of previous workflows in react. Here's the general structure of `useEffect`

```
useEffect(()=>{
	sideEffect()
	return ()=>{
		undoSideEffect() //if needed
	}
}, arrOfVariablesThisCaresAbout)
```

`sideEffect` is pretty self-explanatory. `undoSideEffect` is neat, so React know when it wants to unmount this component, so you can tell it "hey BTW, please clean up this side effects please". This is really useful if you are subscribing, and then unsubscribing, to an event stream or socket or something. It tightly couples the subscription and unscription into one concept, instead of spreading it across the `componetDidMount` and `componentWillUnmount`, leading to better composibility.

Now `arrOfVariablesThisCaresAbout` is interesting. If `undefined`, the effect will re-run on every re-render. You can pass it an array of values that when they change will instead re-trigger the effect. Eg. here is updating the title

```
useEffect(()=>document.title=newTitle, [newTitle]);
```

Everytime `newTitle` changes value, this effect will re-run. If you pass in an empty array, `[]`, it's the same as a `componentDidMount`, since the effect will run once and only once, since you told it to watch for changing values, and then gave it an unchanging value. Eg. `[true]` would also work!

so to recap, the `useEffect` in my code is trying to update the internal state _once_ on mount by grabbing the data from local storage. It then returns the internal state and a new function that when called will both update the local storage value and React's internal state for that component. This mimics the `useState` signature so it's really easy to integrate into your code.



Here's a simple example of using effects for doing stream subscriptions

```
const useStream = (stream)=>{
    const [data, setData] = useState();
    useEffect(()=>{
        stream.subscribe(setData);
        return ()=>stream.unsubscribe(setData);
    });
    return data;
};

function Component({ eventStream }){
    const streamData = useStream(eventStream);

    return <div>{JSON.stringify(streamData)}</div>
};
```

this component will now re-render whenever new data comes down the stream. You could even build in throttling into the `useStream` function if you like.