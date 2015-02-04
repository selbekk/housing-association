var yargs = require('yargs')
    .default({
        // default settings
        env: 'dev',
        logLevel: 'dev'
    }).argv;

var settings = yargs;
delete settings['_'];
delete settings['$0'];

module.exports = settings;
