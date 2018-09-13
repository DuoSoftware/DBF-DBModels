/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

                    
var TenantActivityVariablesScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    key: {type: String, required: true},
    display_name: {type: String, required: true},
    value: {type: String},
    value_list: {type: Array},
    api_method: {type: String},
    type: {type: String},
    category: {type: String},
    data_type: {type: String},
    group: {type: String},
    priority: {type: String},
    advance: {type: String},
    control: {type: String},
    placeholder: {type: String},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true}
});

TenantActivityVariablesScheme.index({"key": "1"}, {"unique": true});

module.exports.tenantactivityvariables = mongoose.model('tenantactivityvariables', TenantActivityVariablesScheme);
