var express = require('express');
var app = express();

var organizationsRouter = require('./organizations/organization-router');

// Serve static files from the public directory
app.use(express.static('public'));

app.use('/organizations', organizationsRouter);

// Start server
app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
