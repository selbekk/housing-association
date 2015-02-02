var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
        res.redirect('/api/docs');
    });

router.get('/docs', function(req, res) {
    res.send("<h1>docs page yo</h1>");
});

module.exports = router;
