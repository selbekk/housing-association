var validator = require('validator');
var mongoose = require('mongoose');

var db = mongoose.connection;

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    phone: String
});

userSchema.methods.isValid = function() {
    return validator.isEmail(this.email)
        && !!this.username
        && this.username.length > 3
        && !!this.phone
        && this.phone.length > 7;
};

module.exports = mongoose.model('User', userSchema);
