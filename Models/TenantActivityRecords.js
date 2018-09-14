/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantActivityRecordsScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    description: {type: String},
    features: {type: Array},
    languages: {type: Array},
    tags: {type: Array},
    what_you_get: {type: Array},
    pricing: {type: Array},
    faq: {type: Array},
    reviewed: {type: Boolean, required: true, default: false},
    state: {type: String},
    type: {type: String},
    path: {type: String},
    npm_module: {type: String},
    npm_version: {type: String},
    variables: {type: Array},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}

});

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
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});

var TenantActivityLanguagesScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    language: {type: String, required: true},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});

var TenantActivityTagsScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    tag: {type: String, required: true},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});

var TenantActivityPricingScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    activity_name: {type: String, required: true},
    name: {type: String},
    pricing_fts: {type: Array},
    price: {type: String, default: 0},
    bill_cycle: {type: String},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});


module.exports.tenantactivityrecords = mongoose.model('tenantactivityrecords', TenantActivityRecordsScheme);
module.exports.tenantactivityvariables = mongoose.model('tenantactivityvariables', TenantActivityVariablesScheme);
module.exports.tenantactivitylanguages = mongoose.model('tenantactivitylanguages', TenantActivityLanguagesScheme);
module.exports.tenantactivitytags = mongoose.model('tenantactivitytags', TenantActivityTagsScheme);
module.exports.tenantactivitypricings = mongoose.model('tenantactivitypricings', TenantActivityPricingScheme);
