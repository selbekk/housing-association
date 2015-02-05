var yargs = require('yargs')
    .default({
        // default settings
        env: 'dev',
        logLevel: 'dev',

        dbHost: 'localhost',
        dbPort: '27017',
        dbDatabase: 'housingassociation'
    }).argv;

var settings = yargs;
delete settings['_'];
delete settings['$0'];

settings.getDbConnectionString = function() {
    return 'mongodb://' + settings.dbHost + ':' + settings.dbPort + '/' + settings.dbDatabase;
}

module.exports = settings;
