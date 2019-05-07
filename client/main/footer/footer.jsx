require('./footer.less');
const React = require('react');


function Footer({ ...props }){
	return <div className={`Footer`} {...props}>
		Footer Component Ready.
	</div>;
};

module.exports = Footer;