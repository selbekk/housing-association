var _ = require('underscore');
var Organization = require('./organization');

var organizations = [
    new Organization({id: 1, name: 'Rosenborggata 12', city: 'Oslo', country: 'Norway'}),
    new Organization({id: 2, name: 'Myrhaugen', city: 'Oslo', country: 'Norway'})
];

function generateNextId() {
    return _.max(organizations, function(org) { return org.getId(); }).id + 1;
}

function getFromId(id) {
    id = parseInt(id);
    return _.find(organizations, function(org) {
        return org.getId() === id;
    })
}

module.exports = {
    get: function(id) {
        id = parseInt(id);

        return getFromId(id);
    },
    getAll: function() {
        return organizations;
    },
    create: function(organization) {
        if (!organization.isValid()) {
            return false;
        }

        organization.id = generateNextId();

        organizations.push(organization)

        return organization.id;
    },
    update: function(organization) {
        if(!organization || !organization.id || !organization.isValid()) {
            return false;
        }

        if(!getFromId(organization.getId())) {
            return false;
        }

        for( var i = 0; i < organizations.length; i++) {
            if( organizations[i].getId() === organization.getId()) {
                organizations[i] = organization;
                return organization;
            }
        }

        return false;
    },
    delete: function(id) {
        var orgToDelete = getFromId(id);
        if(!orgToDelete) {
            return false;
        }

        for (var i = 0; i < organizations.length; i++) {
            if (organizations[i] === orgToDelete) {
                delete organizations[i];
                return orgToDelete;
            }
        }
        return false;
    }

}
