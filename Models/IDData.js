/**
 * Created by Dilshan on 5/16/2019.
 */

 var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IDDataSchema = new Schema({
    recordID: {type: String},
    field: {type: String},
    record: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports.IDData = mongoose.model('IDData', IDDataSchema);
