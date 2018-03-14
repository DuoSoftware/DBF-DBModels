var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var botAppSchema = new Schema({
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    bot_id:{type: ObjectId,ref: 'Bot'},
    app: {type:String,require:true},
    order:{ type: Number, required: true },
    config: {
        Securitykey: { type: String, required: true }
    }
});


var fbChannelSchema = new Schema({
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    page_id: {type:String,require:true},
    app_id: {type:String,require:true},
    app_secret: {type:String,require:true},
    page_token: {type:String,require:true},
    verification_token: {type:String,require:true}

});


var slackChannelSchema = new Schema({
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    client_id: {type:String,require:true},
    client_secret: {type:String,require:true},
    verification_token: {type:String,require:true},
    api_token: {type:String,require:true},
    bot_token: {type:String,require:true}

});


var botSchema = new Schema({

    name: {type: String, required: true, unique: true},
    company: { type: Number, required: true },
    tenant: { type: Number, required: true },
    created_at: {type:Date,default: Date.now,require:true},
    updated_at: {type:Date,default: Date.now,require:true},
    screen_name: {type: String, required: true},
    status:{type: Boolean, required: true},
    channel_facebook: fbChannelSchema,
    channel_slack: slackChannelSchema,
    avatar: String
});



module.exports.Bot = mongoose.model('Bot', botSchema);
module.exports.FacebookChannel = mongoose.model('FacebookChannel', fbChannelSchema);
module.exports.SlackChannel = mongoose.model('SlackChannel', slackChannelSchema);
botAppSchema.index({ company: 1, tenant: 1, bot_id: 1, name: 1}, { unique: true });
module.exports.BotApp = mongoose.model('BotApp', botAppSchema);

