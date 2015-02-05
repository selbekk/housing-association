var _ = require('lodash');

var User = require('./user');
var repo = require('./user-repository');

module.exports = {
    getAll: function(callback) {
        return repo.get(callback);
    },
    get: function(username, callback) {
        return repo.get(username, callback);
    },
    create: function(user, callback) {
        if (!user || !user.isValid()) {
            return false;
        }

        repo.insert(user, callback)
    },
    update: function(user, callback) {
        if(!user || !user.isValid()) {
            return false;
        }

        repo.update(user, callback);
    },
    delete: function(username, callback) {
        repo.delete(username, callback);
    }
};
