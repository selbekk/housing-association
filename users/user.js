var validator = require('validator');
var mongoose = require('mongoose');

var db = mongoose.connection;

var userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'username is required'
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'email is required',
        validate: [validator.isEmail, 'Not a valid email address']
    },
    phone: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema);
