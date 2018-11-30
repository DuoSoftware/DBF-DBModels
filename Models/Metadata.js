/**
 * Created by shehantissera on 11/30/2018.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var metadataSchema = new Schema({
    bot_id: { type: String, required: true },
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: { type: Date, default: Date.now, require: true },
    updated_at: { type: Date, default: Date.now, require: true },
    cards: [{ type: String }],
    attachments: [{ type: String }],
    quickreplies: [{ type: String }],
    buttoncollections: [{ type: String }],
    mediacards: [{ type: String }],
    receipts: [{ type: String }],
    airline: [{ type: String }],
    datasources: [{ type: String }],
    conversationalflows: [{ type: String }],
    entities: [{ type: String }],
    context: [{ type: String }]
});

metadataSchema.index({ "company": 1, "tenant": 1, "bot_id": 1}, { "unique": true });

module.exports.metadata = mongoose.model('metadata', metadataSchema);


