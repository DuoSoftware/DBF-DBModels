var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppModuleScheme = new Schema({
  company: { type: Number, required: true },
  tenant: { type: Number, required: true },
  id: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: false},
  type: {type: String, required: true},
  connection: {type: String, required: true},
  appId: {type: String, required: true},
  api: {type: Schema.Types.Mixed, default: {}, required: true},
  mappableParameters: {type : Array , default : [], required: true},
  created_at: {type:Date, default: Date.now, require:true},
  updated_at: {type:Date, default: Date.now, require:true},
}, { minimize: false }); // Mongoose will not save empty objects to database. to override use minimize

AppModuleScheme.index({id: 1, company: 1, tenant: 1}, {unique: true});

module.exports.appModule = mongoose.model('appModules', AppModuleScheme);