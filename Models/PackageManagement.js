
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var packageSchema = new Schema({

    billingAccount : { type: String, required: true },
    subscriptionID : { type: String, required: true },
    packageID : { type: String, required: true },
    packageDetails : {},
    tenant: { type: Number, required: true },
    created_at: {type:Date,default: Date.now},
    updated_at: {type:Date,default: Date.now}
});

permissionCollectionSchema.index({ "subscriptionID": 1}, { "unique": true });


module.exports.package = mongoose.model('package', packageSchema);


