var NewsletterSignup = require('../domain/newsletter-signup');

module.exports = {
    signUp: function (email, callback) {
        NewsletterSignup.findOne({email: email}, function(err, doc) {
            if(!err && doc) {
                var conflict = { status: 409, message: 'E-mail is already registered' };
                return callback(conflict);
            }
            var signup = new NewsletterSignup({email: email});
            signup.save(callback);
        });

    },
    signOff: function (email, callback) {
        NewsletterSignup.findOneAndRemove({email: email}, callback);
    }
};