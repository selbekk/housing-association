var mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    zip: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
});

module.exports = mongoose.model('Organization', organizationSchema);
