require('./tutoringPage.less');
const React = require('react');


function TutoringPage({ ...props }){
	return <div className={`TutoringPage`} {...props}>
		TutoringPage Component Ready.

		<a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>

	</div>
};

module.exports = TutoringPage;