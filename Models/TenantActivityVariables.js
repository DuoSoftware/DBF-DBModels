/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

                    
var TenantActivityVariablesScheme = new Schema({
    name: {type: String},
    user: {type: String},
    activity_name: {type: String},
    key: {type: String},
    display_name: {type: String},
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
    placeholder: {type: String}
});

module.exports.tenantactivityvariables = mongoose.model('tenantactivityvariables', TenantActivityVariablesScheme);
