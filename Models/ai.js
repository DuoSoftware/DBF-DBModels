var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aiWorkFlowMapScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    workFlowName: {type:String,require:true},
    events:{ type : Array , "default" : [] },
    enable: Boolean
});


module.exports.aiWorkFlowMap = mongoose.model('aiWorkFlowMap', aiWorkFlowMapScheme);