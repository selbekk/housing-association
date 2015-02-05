var db = require('mongoskin').db('localhost:27017/housing-association');

var userCollection = db.collection('users');

module.exports = {
    get: function(query) {
        if (query typeof string) {
            query = { username: query }
        }

        userCollection.find(query);
    }
};
