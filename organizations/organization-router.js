var express = require('express');
var bodyParser = require('body-parser');

var service = require('./organization-service');
var Organization = require('./organization');

var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.route('/')
    .get(function(req, res) {
        var organizations = service.getAll();
        return res.json(organizations);
    })
    .post(urlencodedParser, function(req, res) {
        var organization = new Organization(req.body);

        var id = service.create(organization);

        if(!id) {
            return res.status(400).json('The organization is missing required fields');
        }

        return res.status(201).json(id);
    });

router.route('/:id')
    .get(function(req, res) {
        var organization = service.get(req.params.id);

        if (!organization) {
            return res.sendStatus(404);
        }

        return res.json(organization);
    })
    .delete(function(req, res) {

    });

module.exports = router;
