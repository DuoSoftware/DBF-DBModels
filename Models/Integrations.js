var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var integrationSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    url: {type: String, required: true},
    method: {type: String, required:true},
    url_params: {},
    headers: {},
    body: {},
    response: {
        error:{
            http_code:{type: String, required:true},
            out_message_field: {type: String, required:false},
            check__fields: [
                {
                    name: {type: String, required:false},
                    type: {type: String, required:false},
                    value: {type: String, required:false}
                }
            ]
        },
        success:{
            http_code:{type: String, required:true},
            out_message_field: {type: String, required:false},
            check__fields: [
                {
                    name: {type: String, required:false},
                    type: {type: String, required:false},
                    value: {type: String, required:false}
                }
            ]
        }
    }
});
