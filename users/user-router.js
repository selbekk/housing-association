var express = require('express');

var User = require('./user');
var service = require('./user-service');

var router = express.Router();

router.route('/')
    .get(function(req, res, next) {
        service.getAll(function(err, users) {
            if(err) {
                return next(err);
            }
            return res.json(users);
        });
    })
    .post(function(req, res, next) {
        var user = new User(req.body);

        service.create(user, function(err, id) {
            if(err) {
                return next(err);
            }

            return res.json(id);
        });
    });

router.route('/:username')
    .get(function(req, res, next) {
        var user = service.get(req.params.username, function(err, user) {
            if(err) {
                console.log('there is an error');
                return next(err);
            }

            return res.json(user);
        });
    })
    .put(function(req, res, next) {
        service.update(req.params.username, req.body, function(err, result) {
            if(err) {
                return next(err);
            }
            return res.json(result);
        });
    })
    .delete(function(req, res, next) {
        service.delete(req.params.username, function(err, deleted) {
            if(err) {
                return next(err);
            }
            return res.json(deleted);
        });
    });

module.exports = router;
