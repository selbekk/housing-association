var express = require('express');

var service = require('./organization-service');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        var organizations = service.getAll();
        res.json(organizations);
    });

router.route('/:id')
    .get(function(req, res) {
        var organization = service.get(req.params.id);

        if (!organization) {
            res.sendStatus(404);
        }
        else {
            res.json(organization);
        }
    })
    .post(function(req, res) {

    })
    .delete(function(req, res) {

    });

module.exports = router;
