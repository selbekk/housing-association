var express = require('express');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');

var db = require('./db/mongo');
var logger = require('./util/logger')
var errorHandler = require('./util/error-handler');

var organizationsRouter = require('./routes/organization-router');
var userRouter = require('./routes/user-router');
var openRouter = require('./routes/open-router');

db.connect();

var app = express();

// Register view engine
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Register decorating middleware
app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/js/external'));
app.use(bodyParser.urlencoded({ extended: false }));

// Add some logging to the mix
logger.setup(app);

// Register routes
app.use('/api/organizations', organizationsRouter);
app.use('/api/users', userRouter);
app.use(openRouter);

// Handle errors
app.use(errorHandler.handleValidation);
app.use(errorHandler.handleNotFound);
app.use(errorHandler.handleHttpStatusOverride);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
