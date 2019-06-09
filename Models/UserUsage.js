
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserUsagesSchema = new Schema({
    allowedAmount: { type: String, required: true },
    company: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String },
    enable: { type: Boolean },
    name: { type: String, required: true },
    subscriptionID: { type: String, required: true },
    tenant: { type: String, required: true },
    unit: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    usageID: { type: String, required: true },
    usedAmount: { type: String, required: true },
    userSub: { type: String, required: true }
});

module.exports.UserUsages = mongoose.model('userUsage', UserUsagesSchema);

UserSubscriptionsSchema.index({ 'usageID': 1 }, { unique: true });

