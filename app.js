var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser');

var settings = require('./config/settings');
var organizationsRouter = require('./organizations/organization-router');
var userRouter = require('./users/user-router');

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

// Parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set up routes
app.use('/organizations', organizationsRouter);
app.use('/users', userRouter);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
