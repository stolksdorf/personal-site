const router = require('express').Router();

const headtags = require('vitreum/headtags.js');
const { html } = require('vitreum');

const Routes = require('../client/shared/routes.js');

//TODO; add in favicon

router.get(Object.values(Routes.main), (req, res) => {
	const body = require('../build/ssr.js')({
		url : req.url
	});

	//console.log(body)

	//TODO: add in fontaweesome
	return res.send(html({
		head : `<link href='/bundle.css' rel='stylesheet'></link>\n${headtags.generate()}`,
		body,
		tail : `<script src='/bundle.js'></script>`,
	}));
});

router.get('*', (req, res)=>res.redirect(Routes.main.notFound));

module.exports = router;