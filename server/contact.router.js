const config = require('../config');
const SendGrid = require('@sendgrid/mail');
const Routes = require('../client/shared/routes.js');

const router = require('express').Router();

SendGrid.setApiKey(config.get('sendgrid_key'));

router.post(Routes.api.sendMail, (req, res)=>{
	SendGrid.send({
		to      : 'scott.tolksdorf@gmail.com',
		from    : req.body.email,
		subject : req.body.subject,
		text    : req.body.body
	})
	.then((result)=>res.send('sent!'))
	.catch((err)=>res.status(500).send(err));
});

module.exports = router;