var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goCodesSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    goCode: {type: String, default:''},
    activityID: { type: String, required: true }
});


goCodesSchema.index({ "activityID": 1}, { "unique": true });

module.exports.GoCodes = mongoose.model('GoCodes', goCodesSchema);