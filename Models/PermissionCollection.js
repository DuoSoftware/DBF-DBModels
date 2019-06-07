
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permissionCollectionSchema = new Schema({

    collectionName : { type: String, required: true },
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    collection : [
        {
            permissionName : { type: String, required: true },
            permissionObj : []
        }
    ],
    created_at: {type:Date,default: Date.now},
    updated_at: {type:Date,default: Date.now}
});

permissionCollectionSchema.index({ "collectionName": 1, "company": 1,"tenant": 1}, { "unique": true });


module.exports.permissioncollection = mongoose.model('permissioncollection', permissionCollectionSchema);


