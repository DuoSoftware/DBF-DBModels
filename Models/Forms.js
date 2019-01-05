var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormsScheme = new Schema({
    form_name: {type: String, required: true},
    company: {type: String, required: true},
    tenant: {type: String, required: true},
    created_at: {type:Date, default: Date.now,require:true},
    updated_at: {type:Date, default: Date.now,require:true},
    roles: [{
        roleId: {type: String},
        roleName: {type: String}
    }],
    groups:  [{
        groupId: {type: String},
        groupName: {type: String}
    }],
    description: {type: String},
    status:{type: Boolean, required: true, default:true}

});

FormsScheme.index({"form_name" : 1, "company": 1, "tenant": 1}, {"unique": true});


module.exports.forms = mongoose.model('forms', FormsScheme);