var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var createFolderSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    name: {type: String, default:'unspecified', required: true},
    url: {type: String, required: true},
    folderPath: {type: String, required: true},
    // date:{type:Date, default: Date.now, require:true},
    size:{type: Number},
    type:{type: String, required: true},
    width:{type: Number},
    height:{type: Number},
    created_at: {type:Date, default: Date.now, require:true},
    updated_at: {type:Date, default: Date.now, require:true}
});



module.exports.CreateFolder = mongoose.model('CreateFolder', createFolderSchema);