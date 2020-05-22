var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PaymentOrganizationsScheme = new Schema({
    ID: { type: String, required: true },
    companyName: { type: String },
    companyLogo: { type: String },
    theme: { type: String }
});


PaymentOrganizationsScheme.index({ "ID": 1 }, { "unique": true });

module.exports.paymentOrganizations = mongoose.model('paymentOrganizations', PaymentOrganizationsScheme);