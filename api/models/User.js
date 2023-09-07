const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    email: { type: String, required: false},
    name: { type: String, required: false }
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;