var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadFileSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    name: {type: String, default:'unspecified', required: true},
    url: {type: String, required: true},
    // date:{type:Date, default: Date.now, require:true},
    size:{type: Number, required: true},
    type:{type: String, required: true},
    width:{type: Number, required: false},
    height:{type: Number, required: false},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});



module.exports.UploadFile = mongoose.model('UploadFile', uploadFileSchema);