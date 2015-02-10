var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var db = require('./db/mongo');
var logger = require('./util/logger');
var errorHandler = require('./util/error-handler');

var organizationsRouter = require('./routes/organization-router');
var userRouter = require('./routes/user-router');
var openRouter = require('./routes/open-router');

db.connect();

var app = express();

// Register view engine
app.engine('.hbs', handlebars({defaultLayout: 'default', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Register decorating middleware
app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
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
app.use(errorHandler.logErrors);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
