/**
 * Created by AhmedA on 4/13/2016.
 */
var mongoose = require('mongoose');
var Location = require('./Location');

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    type: String,

    rides:[{
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        }
    }],

    updatedID: String,
    approved: Boolean
});

var users = mongoose.model('User', UserSchema);
module.exports = users;