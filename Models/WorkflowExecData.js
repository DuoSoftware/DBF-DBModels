var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkflowExecDataScheme = new Schema({
    workflowName: {type:String,require:true},
    timePoints:[],
});


WorkflowExecDataScheme.index({ "workflowName": 1}, { "unique": true });

module.exports.workflowData = mongoose.model('workflowData', WorkflowExecDataScheme);
