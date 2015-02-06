var validator = require('validator');
var mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
    id: Number,
    name: String,
    city: String,
    country: String
});

organizationSchema.methods.isValid = function() {
    return this.name
        && this.name.length > 6
        && this.city
        && this.city.length
        && this.country
        && this.country.length > 1;
};

module.exports = mongoose.model('Organization', organizationSchema);
