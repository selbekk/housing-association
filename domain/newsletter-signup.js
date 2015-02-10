var validator = require('validator');
var mongoose = require('mongoose');

var db = mongoose.connection;

var signupSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'email is required',
        validate: [validator.isEmail, 'Not a valid email address']
    }
});

module.exports = mongoose.model('NewsletterSignup', signupSchema);
