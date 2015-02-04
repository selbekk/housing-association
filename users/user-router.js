var express = require('express');

var User = require('./user');
var service = require('./user-service');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        return res.json(service.getAll());
    })
    .post(function(req, res) {
        var user = new User(req.body);

        var id = service.create(user);

        if(!id) {
            return res.sendStatus(400);
        }

        return  res.json(id);
    });

router.route('/:username')
    .get(function(req, res) {
        var user = service.get(req.params.username);

        if (!user) {
            return res.sendStatus(404);
        }

        return res.json(user);
    })
    .put(function(req, res) {
        var user = new User(req.body);
        if(!user || !user.username !== undefined) {
            user.username = req.params.username;
        }

        if (service.update(user)) {
            return res.sendStatus(200);
        }
        return res.sendStatus(400); // TODO: Improve response
    })
    .delete(function(req, res) {
        var deleted = service.delete(req.params.username);

        if(deleted) {
            return res.json(deleted);
        }
        return res.sendStatus(404); // TODO: Improve response
    });

module.exports = router;
