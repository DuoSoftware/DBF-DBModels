var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entityScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    entityName: {type:String,require:true},
    events:{ type : Array , "default" : [] },
    description: {type:String},
    enable: Boolean
});


entityScheme.index({ "company": 1, "tenant": 1, "entityName": 1}, { "unique": true });


module.exports.entityMap = mongoose.model('entityMap', entityScheme);