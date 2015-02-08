var express = require('express');
var service = require('../service/organization-service');
var Organization = require('../domain/organization');

var router = express.Router();

router.route('/')
    .get(function(req, res, next) {
        service.getAll(function(err, organizations) {
            if(err) {
                return next(err);
            }
            return res.json(organizations);
        });
    })
    .post(function(req, res, next) {
        var organization = new Organization(req.body);

        service.create(organization, function(err, newOrg) {
            if(err) {
                return next(err);
            }
            return res.status(201).json(newOrg);
        });
    });

router.route('/:id')
    .get(function(req, res, next) {
        service.get(req.params.id, function(err, organization) {
            if (err) {
                return next(err);
            }
            return res.json(organization);
        });
    })
    .put(function(req, res, next) {
        service.update(req.params.id, req.body, function(err, updated) {
            if(err) {
                return next(err);
            }
            return res.json(updated);
        });
    })
    .delete(function(req, res, next) {
        service.delete(req.params.id, function(err, deleted) {
            if(err) {
                return next(err);
            }
            return res.json(deleted);
        });
    });

module.exports = router;
