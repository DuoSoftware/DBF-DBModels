var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSettingsScheme = new Schema({
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    companyName: { type: String },
    companyLogo: { type: String },
    theme: { type: String }
});


CartSettingsScheme.index({ "ID": 1 }, { "unique": true });

module.exports.cartSettings = mongoose.model('cartSettings', CartSettingsScheme);