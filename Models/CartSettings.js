var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSettingsScheme = new Schema({
    ID: { type: String, required: true },
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    webxsecretkey: { type: String, required: true },
    webxpublickey: { type: String, required: true },
    companyName: { type: String },
    companyLogo: { type: String },
    cartEditable: { type: String, default: 'false', },
    billingAddressEditable: { type: String, default: 'false' },
    shippingAddressNeeded: { type: String, default: 'false' },
    tabName: { type: String, default: 'Cart Checkout' },
    tabFavicon: { type: String, default: 'https://www.smoothflow.io/wp-content/uploads/2018/09/smoothflow_favicon_01.png' },
    theme: { type: String }
});


CartSettingsScheme.index({ "company": 1 }, { "unique": true });

module.exports.cartSettings = mongoose.model('cartSettings', CartSettingsScheme);