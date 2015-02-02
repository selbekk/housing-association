var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

app.listen(3000, function() {
    console.log('Listening for connections at localhost:3000...');
});
