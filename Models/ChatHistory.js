/**
 * Created by vmkde on 6/25/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatHistoryScheme = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    userInfo : {
        userId : {type:String,require:true },
        userName : {type:String}
    },
    interfaceInformation : {
        interface : {type:String,default: "facebook",require:true },
        originId : {type:String,require:true }
    },
    // history:[{
    //     timestamp: {type:Date,default: Date.now,require:true},
    //     direction: {type:String,require:true },
    //     message: {
    //         type : {type:String,require:true },
    //         resourceId : {type:String},
    //         message : {type:String}
    //     }
    // }],
    history:{type:Array},
    enable: { type : Boolean , default : true }

});


//AutomationDnsMapScheme.index({ "company": 1, "tenant": 1, "workflowName": 1}, { "unique": true });

module.exports.chathistory = mongoose.model('chathistory', ChatHistoryScheme);
