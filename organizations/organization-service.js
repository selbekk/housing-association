var _ = require('lodash');
var Organization = require('./organization');

module.exports = {
    getAll: function(callback) {
        Organization.find(callback);
    },
    get: function(id, callback) {
        Organization.find({_id: id}, callback);
    },
    create: function(organization, callback) {
        organization.save(callback);
    },
    update: function(organization, callback) {
        Organization.findByIdAndUpdate(organization.get('_id'), organization, callback);
    },
    delete: function(id, callback) {
        Organization.findByIdAndRemove(id, callback);
    }

}
