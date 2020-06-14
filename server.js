const express = require('express');
const ecstatic = require('ecstatic');
const http = require('http');
const { ExpressPeerServer } = require('peer');
 
const app = express();
 
app.use(ecstatic({
  root: `${__dirname}/public`,
  showdir: true,
}));
 
const server = http.createServer(app).listen(9000);
console.log('Listening on :9000');

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: 'myapp'
});
 
app.use('/peerjs', peerServer);
