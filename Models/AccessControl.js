
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accessControlSchema = new Schema({
    permissionName : { type: String, required: true },
    permissionObj : [],
    created_at: {type:Date,default: Date.now},
    updated_at: {type:Date,default: Date.now}
});



module.exports.accesscontrol = mongoose.model('accesscontrol', accessControlSchema);


