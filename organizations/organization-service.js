var _ = require('lodash');
var Organization = require('./organization');

module.exports = {
    getAll: function(callback) {
        Organization.find(callback);
    },
    get: function(id, callback) {
        Organization.findById(id, callback);
    },
    create: function(organization, callback) {
        organization.save(callback);
    },
    update: function(id, organization, callback) {
        Organization.findByIdAndUpdate(id, organization, callback);
    },
    delete: function(id, callback) {
        Organization.findByIdAndRemove(id, callback);
    }

}
