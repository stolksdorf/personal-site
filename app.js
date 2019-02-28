const config = require('./config/config.init.js');

const server = require('./server/server.js');

const PORT = config.get('port');
server.listen(PORT, ()=>{
	console.log('_____________________________');
	console.log(`PROJECT server running on port:${PORT} 🚀 `);
});