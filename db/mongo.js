var mongoose = require('mongoose');

var config = require('./../config/settings');

var db;

module.exports = {
    connect: function() {
        db = mongoose.connect(config.getDbConnectionString(), function(err) {
            if(err) {
                console.error('Could not connect to database. Have you started mongod? ')
                console.error(err);
                console.error('Exiting application.');
                process.exit(0);
            }
            else {
                console.log('connected to mongo db at port ' + config.dbPort + '!');
            }
        });
    }
};
