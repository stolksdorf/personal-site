

const React       = require('react');
const createClass = require('create-react-class');

const Marked = require('marked');

module.exports = ({ content })=>{
	return <div className='resume' dangerouslySetInnerHTML={{__html:Marked(content)}} />

}
