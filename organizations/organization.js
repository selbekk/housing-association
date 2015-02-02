module.exports = function(opts) {
    this.id = opts.id;
    this.name = opts.name;
    this.city = opts.city;
    this.country = opts.country;

    this.isValid = function() {
        return this.name && this.city && this.country;
    }
}
