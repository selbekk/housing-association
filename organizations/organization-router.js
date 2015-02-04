var express = require('express');
var service = require('./organization-service');
var Organization = require('./organization');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        var organizations = service.getAll();
        return res.json(organizations);
    })
    .post(function(req, res) {
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
    .put(function(req, res) {
        var organization = new Organization(req.body);
        if(!organization || !organization.id !== undefined) {
            organization.id = req.params.id;
        }

        if (service.update(organization)) {
            return res.sendStatus(200);
        }
        return res.sendStatus(400); // TODO: Improve response
    })
    .delete(function(req, res) {
        var deleted = service.delete(req.params.id);

        if(deleted) {
            return res.json(deleted);
        }
        return res.sendStatus(404); // TODO: Improve response
    });

module.exports = router;
