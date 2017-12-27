var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;



var quickReplyButtonSchema = new Schema({
    type: {type: String, enum: ['text', 'location'], default: 'text', required: true},
    title: String,
        payload: String,
    image: String
});


var quickReplySchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    items: [quickReplyButtonSchema]
});


var buttonSchema = new Schema({
    type: {type: String, enum: ['web_url', 'postback', 'element_shear', 'payment', 'phone_number',
        'account_link', 'account_unlink', 'game_play'],
    default: 'web_url', required: true},
    title: String,
        payload: {},
    other_data: {}
});

var buttonListSchema = new Schema({
    type: {type: String, enum: ['card', 'normal'], default: 'normal', required: true},
    text: String,
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    items: [buttonSchema]
});


var attachmentSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    type: {type: String, enum: ['image', 'audio', 'video', 'file'], default: 'image', required: true},
    title: String,
    payload: {
        url: {type:String,require:true}
    }
});



var cardSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    type: {type: String, enum: ['generic', 'list'], default: 'generic', required: true},
    items: [
        {
            title: String,
            sub_title: String,
            image_url: String,
            default_action: {
                url: String,
            },
            buttons: [buttonSchema]
        }
    ],
    buttons: [buttonSchema]

});

var mediaCardSchema = new Schema({
    company: {type: Number, required: true},
    tenant: {type: Number, required: true},
    created_at: {type: Date, default: Date.now, require: true},
    updated_at: {type: Date, default: Date.now, require: true},
    items: [
        {
            type: {type: String, enum: ['image', 'audio'], default: 'image', required: true},
            media_url: String,
            attachment_id: String,
            buttons: [buttonSchema]
        }
    ],

});


module.exports.QuickReply = mongoose.model('QuickReply', quickReplySchema);
module.exports.ButtonList = mongoose.model('ButtonList', buttonListSchema);
module.exports.Attachment = mongoose.model('Attachment', attachmentSchema);
module.exports.Card = mongoose.model('Card', cardSchema);
module.exports.MediaCard = mongoose.model('MediaCard', mediaCardSchema);



