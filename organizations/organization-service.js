var _ = require('underscore');
var Organization = require('./organization');

var organizations = [
    new Organization({id: 1, name: 'Rosenborggata 12', city: 'Oslo', country: 'Norway'}),
    new Organization({id: 2, name: 'Myrhaugen', city: 'Oslo', country: 'Norway'})
];

module.exports = {
    get: function(id) {
        id = parseInt(id);

        return _.find(organizations, function(org) {
            return id && id === org.id;
        });
    },
    getAll: function() {
        return organizations;
    },
    create: function(organization) {

    },
    update: function(organization) {

    },
    delete: function(id) {

    }

}
