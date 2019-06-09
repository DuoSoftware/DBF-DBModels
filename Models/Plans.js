var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AlacarteSchema = new Schema({
    alacarteCode: { type: String, required: true },
    allowedAmount: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    planCode: { type: String, required: true },
    unit: { type: String }
});

var PlansSchema = new Schema({
    company: { type: String, required: true },
    planCode: { type: String, required: true },
    alacarte: { type: Array, "default": [] },
    createdAt: { type: Date, default: Date.now },
    description: { type: String },
    enable: { type: Boolean },
    name: { type: String },
    price: { type: String, required: true },
    tenant: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    userSub: { type: String, required: true }
});

module.exports.Alacarte = mongoose.model('alacarte', AlacarteSchema);
module.exports.Plans = mongoose.model('plan', PlansSchema);

PlansSchema.index({ 'planCode': 1 }, { unique: true });