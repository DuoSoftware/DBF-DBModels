/**
 * Created by Dilshan Kaluarachchi on 09/10/2018.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecurlyPlanScheme = new Schema({
    plan_code: {type: String},
    amount_in_cents: {type: String}
});

module.exports.recurlyplan = mongoose.model('recurlyplan', RecurlyPlanScheme);
