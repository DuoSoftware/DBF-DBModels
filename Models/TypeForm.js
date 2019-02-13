var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeFormScheme = new Schema({
    company: {type: String, required: true},
    created_at: {type:Date, default: Date.now,require:true},
    expiryTime: {type: String, required: true},
    refreshToken: {type: String, required: true},
    tenant: {type: String, required: true},
    token: {type: String, required: true},
    updated_at: {type:Date, default: Date.now,require:true}
});

TypeFormScheme.index({"company": 1, "tenant": 1}, {"unique": true});


module.exports.typeform = mongoose.model('typeform', TypeFormScheme);
