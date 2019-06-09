
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSubscriptionsSchema = new Schema({
    company: { type: String, required: true },
    planCode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String },
    enable: { type: Boolean },
    recurlySubscriptionID: { type: String },
    subscriptionID: { type: String, required: true },
    tenant: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    userSub: { type: String, required: true }
});

module.exports.UserSubscriptions = mongoose.model('userSubscription', UserSubscriptionsSchema);

UserSubscriptionsSchema.index({ 'subscriptionID': 1 }, { unique: true });

