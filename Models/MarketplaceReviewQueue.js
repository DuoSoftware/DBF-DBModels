var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarketplaceReviewScheme = new Schema({
    company: {type: String, required: true},
    tenant: {type: String, required: true},
    created_at: {type: Date, require:true},
    updated_at: {type: Date, require:true},
    description: {type: String},
    review_status: {type: String, required: true, enum: ['INQUEUE', 'PASSED', 'FAILED', 'PENDINGREVISION', 'INPROGRESS']},
    activity_name :  {type: String, required: true},
    npm_module: {type: String, required: true},
    npm_version: {type: String},
    variables: {type: Array},
    scope: {type: String},
    release_notes: {type: Array},
    reviewer_comments: [
        {
            reviewer: {type: String, required:true},
            comment: {type: String, required:true},
            status: {type: String}
        }
    ],
    review_count: {type: Number},
    tenant_name: {type: String, required: true},

});

MarketplaceReviewScheme.index({"company": 1, "tenant": 1}, {"unique": true});

module.exports.marketplacereview = mongoose.model('marketplacereview', MarketplaceReviewScheme);