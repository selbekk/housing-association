var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db/mongo');
var logger = require('./util/logger')
var errorHandler = require('./util/error-handler');
var organizationsRouter = require('./organizations/organization-router');
var userRouter = require('./users/user-router');

db.connect();

var app = express();

// Register decorating middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Add some logging to the mix
logger.setup(app);

// Register routes
app.use('/api/organizations', organizationsRouter);
app.use('/api/users', userRouter);

// Handle errors
app.use(errorHandler.handleValidation);
app.use(errorHandler.handleNotFound);
app.use(errorHandler.handleHttpStatusOverride);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
