var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var favicon = require('serve-favicon');
var fs = require('fs');
var path = require('path');
var http = require('http');

// Debug
var debug = require('debug')('server');

// Create the server
var app = express();

// Setup the middleware as required
app.use(compression());
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'static')));

// TODO: Parse out the static file dirs in the apps

// TODO: Setup the http route handlers from the apps
app.use('/teleop', require('./apps/hlpr_web_teleop/routes'));

// Set the Express server settings and create the Http Server
var port = process.env.PORT || 8000;
var host = process.env.HOST || '0.0.0.0';
app.set('port', port);
app.set('host', host);

// Start the server
var server = http.createServer(app);
server.listen(port, host);

server.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', function() {
    var addr = server.address();
    debug('Listening on ' + addr.port);
});

// TODO: Set the ws handlers from the apps
var teleopRouter = new require('./apps/hlpr_web_teleop/ws')({
    server: server,
    path: '/teleop'
});
