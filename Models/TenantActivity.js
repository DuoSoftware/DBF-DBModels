/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenantActivityScheme = new Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    description: {type: String},
    enable: {type: Boolean, required: true, default: false},
    scope: {type: String, required: true},
    activities: {type: Array},
    created_at: {type: Date, default: Date.now,require:true},
    updated_at: {type: Date, default: Date.now,require:true}
});

module.exports.tenantactivity = mongoose.model('tenantactivity', TenantActivityScheme);
