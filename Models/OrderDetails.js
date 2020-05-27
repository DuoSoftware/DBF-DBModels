var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderItemSchema = new Schema({
    itemName: { type: String },
    imageUrl: { type: String },
    description: { type: String },
    quantity: { type: String },
    value: { type: String }
});

var OrderDetailsSchema = new Schema({
    orderID: { type: String },
    orderStatus: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    emailID: { type: String },
    totalAmount: { type: String },
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    created_at: { type: Date, default: Date.now, require: true },
    updated_at: { type: Date, default: Date.now, require: true },
    items: [OrderItemSchema]
});

module.exports.orderDetails = mongoose.model('orderDetails', OrderDetailsSchema);


