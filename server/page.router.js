const router = require('express').Router();
const mainRenderer = require('../build/main/render.js');

const Routes = require('../client/shared/routes.js');

router.get(Object.values(Routes.main), (req, res) => {
	return res.send(mainRenderer({
		url : req.url
	}));
});

router.get('*', (req, res)=>res.redirect(Routes.main.notFound));

module.exports = router;