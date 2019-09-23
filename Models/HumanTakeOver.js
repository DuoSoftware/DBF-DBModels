
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HumanTakeSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    botid: { type: String, required: true },
    humanTakeOver: { type: Boolean, required: true, default : false },
    description: { type: String },
    enable: { type: Boolean, default : true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

HumanTakeSchema.index({ 'botid': 1 }, { unique: true });

module.exports.humantakeover = mongoose.model('humantakeover', HumanTakeSchema);



