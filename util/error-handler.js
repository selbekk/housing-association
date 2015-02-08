module.exports = {
    handleValidation: function(err, req, res, next) {
        if(err.name === 'ValidationError') {
            return res.status(400).json(err);
        }
        next();
    },
    handleRemaining: function(err, req, res, next) {
        if(err) {
            return res.status(500).json();
        }
        next();
    }
};
