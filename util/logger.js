var fs = require('fs');
var morgan = require('morgan');

var settings = require('./config/settings');

module.exports = {
    setup: function(app) {
        // Set up access logger
        var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
        app.use(morgan(settings.logLevel, { stream: accessLogStream }));

        // Log to stdout as well, if in development
        if(settings.env === 'dev') {
            app.use(morgan(settings.logLevel));
        }

    }
}
