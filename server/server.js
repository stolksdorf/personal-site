const express = require('express');
const server  = express();
const errors  = require('./error.handler.js');


server.use(require('body-parser').json());

server.use(errors.prep);
server.use(express.static(__dirname + '/../build'));
server.enable('trust proxy');

server.use(require('./contact.router.js'));
server.use(require('./blog.router.js'));
server.use(require('./page.router.js'));

server.all('*', (req, res) => res.status(404).send('Oh no.') );

server.use(errors.handle);
module.exports = server;