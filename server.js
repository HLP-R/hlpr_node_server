var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var favicon = require('serve-favicon');
var fs = require('fs');
var path = require('path');

// Debug
var debug = require('debug')('server');

// Create the server
var app = express();

// Setup the middleware as required
app.use(compression());
app.use(favicon(path.join(__dirname + 'static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// TODO: Parse out the static file dirs

// Setup the route handlers
app.use('/', blog); // FIXME

// TODO: Get the ws handlers

// TODO: Combine the http and ws handlers together

// Serve the combined server
