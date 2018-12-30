var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocksScheme = new Schema({
    dock_name: {type: String, required: true},
    company: {type: String, required: true},
    tenant: {type: String, required: true},
    created_at: {type:Date, default: Date.now,require:true},
    updated_at: {type:Date, default: Date.now,require:true},
    description: {type: String},
    structure: {type: Array}
});

DocksScheme.index({"dock_name" : 1}, {"unique": true});


module.exports.docks = mongoose.model('docks', DocksScheme);
