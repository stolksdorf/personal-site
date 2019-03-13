const router = require('express').Router();
const mainRenderer = require('../build/main/render.js');

const Routes = require('../client/shared/routes.js');

router.get(Object.values(Routes), (req, res) => {
	return res.send(mainRenderer({
		url : req.url
	}));
});

router.get('*', (req, res)=>{
	return res.redirect(Routes.notFound);
});

module.exports = router;