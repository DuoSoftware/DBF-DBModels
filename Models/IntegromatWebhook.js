var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IntegromatWebhookScheme = new Schema({
  id: {type: String, required: true},
  webhookName: {type: String, required: true},
  payloadInterface: {type : Array , default : [], required: true},
  company: { type: Number, required: true },
  tenant: { type: Number, required: true },
  webhookUrl: {type: String, required: true}
});

IntegromatWebhookScheme.index({id: 1, company: 1, tenant: 1}, {unique: true});

module.exports.IntegromatWebhook = mongoose.model('integromatWebhooks', IntegromatWebhookScheme);