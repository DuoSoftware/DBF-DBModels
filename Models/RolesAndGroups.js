/**
 * Created by vmkde on 5/30/2018.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var rolesScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    roleName: {type:String,require:true},
    permissions:[{
        permissionDisplayName : {type: String},
        permissionName: {type: String},
        permissionObj: {}
    }],
    description: {type:String},
    enable: { type : Boolean , default : true }
});


var groupScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    groupName: {type:String,require:true},
    roleName: {type:String,require:true},
    roleId: {type:String,require:true},
    users:[{
        email: {type: String},
        userId: {type: String}
    }],
    description: {type:String},
    enable: { type : Boolean , default : true }
});


var userScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    userName: {type:String,require:true},
    email: {type:String,require:true},
    roles: [{
        roleId: {type: String},
        roleName: {type: String}
    }],
    groups:  [{
        groupId: {type: String},
        groupName: {type: String}
    }],
    description: {type:String},
    enable: { type : Boolean , default : true }
});




rolesScheme.index({ "company": 1, "tenant": 1, "roleName": 1}, { "unique": true });
groupScheme.index({ "company": 1, "tenant": 1, "groupName": 1}, { "unique": true });
userScheme.index({ "company": 1, "tenant": 1, "email": 1}, { "unique": true });


module.exports.roles = mongoose.model('roles', rolesScheme);
module.exports.groups = mongoose.model('groups', groupScheme);
module.exports.user = mongoose.model('user', userScheme);