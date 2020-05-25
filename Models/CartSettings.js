var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSettingsScheme = new Schema({
    ID: { type: String, required: true },
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    companyName: { type: String },
    companyLogo: { type: String },
    cartEditable: { type: String, default: 'false', },
    shippingAddressNeeded: { type: String, default: 'false' },
    theme: { type: String }
});


CartSettingsScheme.index({ "ID": 1 }, { "unique": true });

module.exports.cartSettings = mongoose.model('cartSettings', CartSettingsScheme);