var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WebXPayPaymentScheme = new Schema({
    ID: { type: Number, required: true },
    orderID: { type: String },
    orderRefferenceNumber: { type: String },
    dateTimeTransaction: { type: String },
    status: { type: String },
    statusCode: { type: String },
    comment: { type: String },
    paymentGatewayUsed: { type: String }
});


WebXPayPaymentScheme.index({ "ID": 1 }, { "unique": true });

module.exports.webXPayPayment = mongoose.model('webXPayPayment', WebXPayPaymentScheme);