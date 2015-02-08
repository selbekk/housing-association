var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db/mongo');
var logger = require('./util/logger')
var organizationsRouter = require('./organizations/organization-router');
var userRouter = require('./users/user-router');

db.connect();

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
logger.setup(app);

app.use('/organizations', organizationsRouter);
app.use('/users', userRouter);

app.use(function(err, req, res, next) {
    if(err.name === 'ValidationError') {
        return res.status(400).json(err);
    }
    next();
});

app.use(function(err, req, res, next) {
    if(err) {
        return res.status(500).json();
    }
    next();
});

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
