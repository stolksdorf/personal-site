const config = require('pico-conf')
	.env({ lowercase: true })
	.add(require(`../config/${process.env.NODE_ENV}.js`))
	.defaults(require(`../config/default.js`))
	.required([]);

const server = require('./server/server.js');

const PORT = config.get('port');
server.listen(PORT, ()=>console.log(`server on port:${PORT}`));