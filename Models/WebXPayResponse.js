var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WebXPayResponseScheme = new Schema({
    ID: { type: String, required: true },
    orderID: { type: String },
    orderRefferenceNumber: { type: String },
    dateTimeTransaction: { type: String },
    status: { type: String },
    statusCode: { type: String },
    comment: { type: String },
    paymentGatewayUsed: { type: String }
});


WebXPayResponseScheme.index({ "ID": 1 }, { "unique": true });

module.exports.webXPayResponse = mongoose.model('webXPayResponse', WebXPayResponseScheme);