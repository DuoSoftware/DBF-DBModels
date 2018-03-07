var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aiWorkFlowMapScheme = new Schema({
    tenant : {type:String,require:true},
    workFlowName: {type:String,require:true},
    events:{ type : Array , "default" : [] },
    enable: Boolean
});


module.exports.aiWorkFlowMap = mongoose.model('aiWorkFlowMap', aiWorkFlowMapScheme);