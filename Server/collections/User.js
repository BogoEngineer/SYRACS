const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

var model = mongoose.model('User', UserSchema);
model.collection.name = 'User';
module.exports = model;