/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantActivityScheme = new Schema({
    tenant: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String},
    enable: {type: Boolean, required: true, default: false},
    scope: {type: String, required: true},
    activities: {type: Array},
    created_at: {type: Date, default: Date.now,require:true},
    updated_at: {type: Date, default: Date.now,require:true}
});

TenantActivityScheme.index({"company": 1, "tenant": 1}, {"unique": true});

module.exports.tenantactivity = mongoose.model('tenantactivity', TenantActivityScheme);
