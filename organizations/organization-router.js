var express = require('express');
var service = require('./organization-service');
var Organization = require('./organization');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        service.getAll(function(err, organizations) {
            if(err) {
                console.error(err);
                res.status(500).send(err);
            }
            return res.json(organizations);
        });
    })
    .post(function(req, res) {
        var organization = new Organization(req.body);

        service.create(organization, function(err, newOrg) {
            if(err) {
                console.error(err);
                return res.status(500).send(err);
            }

            return res.status(201).json(newOrg);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        service.get(req.params.id, function(err, organization) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }

            return res.json(organization);
        });
    })
    .put(function(req, res) {
        service.update(req.params.id, req.body, function(err, updated) {
            if(err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.json(updated);
        });
    })
    .delete(function(req, res) {
        service.delete(req.params.id, function(err, deleted) {
            if(err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.json(deleted);
        });
    });

module.exports = router;
