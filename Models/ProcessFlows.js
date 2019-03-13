var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkFlowScheme = new Schema({
        ID: {type: String, required: true},
        WFID: {type: String, required: true},
        Name: {type: String, required: true},
        DisplayName: {type: String, required: true},
        comment: {type: String},
        Description: {type: String},
        version: {type: String, required: true},
        DateTime: {type: String, required: true},
        UserName: {type: String, required: true},
        JSONData: {type: String, required: true},
        AuthorDetails: {
            Name: {type: String, required: true},
            Email: {type: String, required: true},
            Domain: {type: String, required: true}
        }
    }


);

WorkFlowScheme.index({"ID" : 1, "company": 1, "tenant": 1}, {"unique": true});


module.exports.workflow = mongoose.model('workflow', WorkFlowScheme);
