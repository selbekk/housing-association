var express = require('express');
var newsletterService = require('../service/newsletter-service');

var router = express.Router();

router.get(function(req, res, next) {
    res.render('index', { title: 'super title!'} );
});

router.route('/newsletter')
    .post(function(req, res, next) {
        var email = req.body.email;
        newsletterService.signUp(email, function(err) {
            if (err) {
                if(err.status === 409) {
                    return res.status(409).json(err.message);
                }
                return next(err);
            }

            console.log(email + ' just signed up for the newsletter!');
            return res.sendStatus(201);
        });
    })
    .delete(function(req, res, next) {
        var email = req.body.email;
        newsletterService.signOff(email, function(err, deleted) {
            if(err) {
                return next(err);
            }
            if(!deleted) {
                return res.sendStatus(404);
            }
            console.log(deleted.email + ' just withdrew from the newsletter.');
            return res.json({email: deleted});
        });
    });

router.route('/login')
    .get(function(req, res, next) {
        res.render('login');
    })
    .post(function(req, res, next) {

    });


module.exports = router;
