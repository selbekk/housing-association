var express = require('express');

var User = require('./user');

var router = express.Router();

var userStore = [
    new User({ username: 'admin', email: 'admin@mailinator.com', phone: '92673134' }),
    new User({ username: 'selbekk', email: 'selbekk@mailinator.com', phone: '99009900' }),
    new User({ username: 'test', email: 'test@mailinator.com', phone: '91929394' }),
];

router.route('/')
    .get(function(req, res) {
        return res.json(userStore);
    });

module.exports = router;
