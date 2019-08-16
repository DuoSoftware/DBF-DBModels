
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SmallTalkSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    botid: { type: String, required: true },
    key: { type: String, required: true },
    description: { type: String },
    enable: { type: Boolean, default : true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

SmallTalkSchema.index({ 'botid': 1 }, { unique: true });

module.exports.smalltalk = mongoose.model('smalltalk', SmallTalkSchema);



