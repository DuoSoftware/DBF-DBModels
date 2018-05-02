var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entityScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    entityName: {type:String,require:true},
    values:{ type : Array , "default" : [] },
    description: {type:String},
    enable: { type : Boolean , default : true }
});


entityScheme.index({ "company": 1, "tenant": 1, "entityName": 1}, { "unique": true });


var contextScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    workflowName: {type:String,require:true},
    bot_id: {type:String,require:true},
    contextMapping:[{
        entityName: {type:String,require:true},
        contextName: {type:String,require:true}
    }] ,
    description: {type:String},
    enable: { type : Boolean , default : true }
});

contextScheme.index({ "company": 1, "tenant": 1, "workflowName": 1, "bot_id" : 1}, { "unique": true });


module.exports.entityMap = mongoose.model('entityMap', entityScheme);
module.exports.contextMap = mongoose.model('contextMap', contextScheme);