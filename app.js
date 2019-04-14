const config = require('./config');

const server = require('./server/server.js');

const PORT = config.get('port');
server.listen(PORT, ()=>{
	console.log('_____________________________');
	console.log(`Personal Site server running on port:${PORT} 🚀 `);
});