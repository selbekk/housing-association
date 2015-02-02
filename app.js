var express = require('express');
var app = express();

var apiRouter = require('./api/router.js');

// Serve static files from the public directory
app.use(express.static('public'))

// Serve API resources
app.use('/api', apiRouter),

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
