module.exports = {
    handleValidation: function(err, req, res, next) {
        if(err.name === 'ValidationError') {
            return res.status(400).json(err);
        }
        next(err);
    },
    handleNotFound: function(err, req, res, next) {
        if(err.name === 'NotFound' || err.status === 404) {
            return res.status(404).json(err);
        }
        next(err);
    },
    handleHttpStatusOverride: function(err, req, res, next) {
        console.log('overriding http status if set in error');
        if(err.statusCode) {
            res.status(err.statusCode);
        }
        next(err);
    },
    logErrors: function(err, req, res, next) {
        console.error('such error: ', err);
        next(err);
    }
};
