var mongoose = require('mongoose');

var config = require('./../config/settings');

var db;

module.exports = {
    connect: function() {
        db = mongoose.connect(config.getDbConnectionString(), function(err) {
            if(err) {
                console.log('could not connect to database with connection string '
                + config.getDbConnectionString() + '. Have you started mongod? ', err);
            }
            else {
                console.log('connected to mongo db at port ' + config.dbPort + '!');
            }
        });
    }
};
