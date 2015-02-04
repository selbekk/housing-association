var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

var settings = require('./util/settings');
var organizationsRouter = require('./organizations/organization-router');

// Set up express
var app = express();

// Serve static files
app.use(express.static('public'));

// Set up access logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan(settings.logLevel, { stream: accessLogStream }));

// Log to stdout as well, if in development
if(settings.env === 'dev') {
    app.use(morgan(settings.logLevel));
}

// Set up routes
app.use('/organizations', organizationsRouter);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
