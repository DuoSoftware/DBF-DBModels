var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var authMetaDataSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, required: true},
    updated_at: {type: Date, default: Date.now, required: true},
    authType: {type: String, enum: ['cognito', 'azure_ad', 'custom'], default: 'cognito', required: true},
    config: {
        cognito: {
            poolRegion: {type: String},
            userPoolId: {type: String},
            publicKeyUrl: {type: String}
        },
        azure_ad: {
            publicKeyUrl: {type: String}
        },
        custom: {
            publicKeyUrl: {type: String}
        }
    }
});

module.exports.AuthMetaData = mongoose.model('AuthMetaData', authMetaDataSchema);