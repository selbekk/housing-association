var _ = require('lodash');

var User = require('../domain/user');


module.exports = {
    getAll: function(callback) {
        User.find(callback);
    },
    get: function(username, callback) {
        User.findOne({ username: username }, function(err, result) {
            if(!result && !err) {
                err = {
                    name: 'NotFound',
                    message: 'Could not find user with username ' + username,
                    status: 404
                };
            }
            callback(err, result);
        });
    },
    create: function(user, callback) {
        user.save(callback);
    },
    update: function(username, change, callback) {
        User.findOneAndUpdate({ username: username }, change, callback);
    },
    delete: function(username, callback) {
        User.findOneAndRemove({ username: username }, callback);
    }

};
