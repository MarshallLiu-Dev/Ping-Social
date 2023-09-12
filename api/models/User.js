const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: 4 },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: true, match: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g },
    name: { type: String, required: true },
    age: { type: Number, required: false },
    profileImage: { type: Buffer, required: false },
    profileImageType: { type: String, required: false }, // Mime type of the image
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
