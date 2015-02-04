var validator = require('validator');

module.exports = function(opts) {
    this.username = opts.username;
    this.email = opts.email;
    this.phone = opts.phone;

    this.isValid = function() {
        return this.username && validator.isEmail(this.email);
    }
}
