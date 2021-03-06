/**
 * Created by vmkde on 6/20/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutomationDnsMapScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    workflowName: {type:String,require:true},
    deploymentType : {type:String,require:true},
    serverName: {type:String},
    environment : {type:String,require:true},
    remoteUrl: {type:String,require:true},
    proxyUrl: {type:String,require:true},
    user: {type:String,require:true},
    apiKey:{type:String},
    enable: { type : Boolean , default : true }


});


AutomationDnsMapScheme.index({ "company": 1, "tenant": 1, "workflowName": 1}, { "unique": true });

module.exports.dnsmap = mongoose.model('dnsmap', AutomationDnsMapScheme);


