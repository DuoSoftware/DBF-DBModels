/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantActivityRecordsScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    reviewed: {type: Boolean, required: true, default: false},
    state: {type: String},
    type: {type: String},
    path: {type: String},
    npm_module: {type: String},
    npm_version: {type: String},
    variables: {type: Array},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true}

});

TenantActivityRecordsScheme.index({"activity_name": "1"}, {"unique": true});

module.exports.tenantactivityrecords = mongoose.model('tenantactivityrecords', TenantActivityRecordsScheme);