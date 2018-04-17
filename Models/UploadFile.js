var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uploadFileSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    images: [singleFileSchema],
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});

var singleFileSchema = new Schema({
    name: {type: String, default:'unspecified', required: true},
    url: {type: String, required: true}
});

module.exports.UploadFile = mongoose.model('UploadFile', uploadFileSchema);