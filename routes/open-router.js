var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'super title!'} );
});

router.route('/login')
    .get(function(req, res, next) {
        res.render('login');
    })
    .post(function(req, res, next) {

    })


module.exports = router;
