/**
 * Created by Dilshan on 5/16/2019.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChannelsScheme = new Schema({
    botID: {type:String, required:true},
    company: {type:String, required:true},
    channelID: {type:String, required:true},
    channelFacebook: fbChannelSchema,
    channelSlack: slackChannelSchema,
    channelViber: viberChannelSchema,
    channelVoiceBot: voiceBotChannelSchema,
    channelWhatsApp: whatsAppChannelSchema,
    createdAt: {type:Date, default:Date.now},
    description: {type:String},
    enable: {type: Boolean},
    fromID: {type:String, required:true},
    name: {type:String},
    state: {type:String},
    tenant: {type:String, required:true},
    type: {type:String, required:true},
    updatedAt: {type:Date, default:Date.now},
    userSub: {type:String, required:true}
});

var fbChannelSchema = new Schema({
    app_id: {type:String, required:true},
    app_secret: {type:String, required:true},
    company: {type:String, required:true},
    created_at: {type:Date, default:Date.now, required:true},
    page_id: {type:String, required:true, unique: true},
    page_token: {type:String, required:true},
    tenant: {type:String, required:true},
    updated_at: {type:Date, default:Date.now, required:true},
    userSub: {type:String, required:true},
    verification_token: {type:String, required:true}
});

var slackChannelSchema = new Schema({
    api_token: {type:String, required:true},
    bot_token: {type:String, required:true},
    client_id: {type:String, required:true},
    client_secret: {type:String, required:true},
    company: {type:String, required:true},
    created_at: {type:Date, default:Date.now, required:true},
    tenant: {type:String, required:true},
    updated_at: {type:Date, default:Date.now, required:true},
    userSub: {type:String, required:true},
    verification_token: {type:String, required:true}
});

var viberChannelSchema = new Schema({
    authToken: {type:String, required:true},
    avatar: {type:String, required:true},
    company: {type:String, required:true},
    created_at: {type:Date, default:Date.now, required:true},
    name: {type:String, required:true},
    tenant: {type:String, required:true},
    updated_at: {type:Date, default:Date.now, required:true},
    userSub: {type:String, required:true},
    webhookurl: {type:String, required:true}
});

var voiceBotChannelSchema = new Schema({
    company: {type:String, required:true},
    created_at: {type:Date, default:Date.now, required:true},
    tenant: {type:String, required:true},
    updated_at: {type:Date, default:Date.now, required:true},
    userSub: {type:String, required:true}
});

var whatsAppChannelSchema = new Schema({
    accountSid: {type:String, required:true},
    authToken: {type:String, required:true},
    company: {type:String, required:true},
    created_at: {type:Date, default:Date.now, required:true},
    tenant: {type:String, required:true},
    updated_at: {type:Date, default:Date.now, required:true},
    userSub: {type:String, required:true}
});

ChannelsScheme.index({"channelID": 1, "fromID": 1}, {"unique": true});

module.exports.channels = mongoose.model('channels', ChannelsScheme);
