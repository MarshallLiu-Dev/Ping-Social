// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const UserSchema = new Schema({
//     username: { type: String, required: true, min: 4, unique: true },
//     password: { type: String, required: true },
//     phoneNumber: { type: Number, required: false },
//     email: { type: String, required: false },
//     name: { type: String, required: false },
//     cover: { type: String, required: false }, // Add the 'cover' field
// });

// const UserModel = model('User', UserSchema);

// module.exports = UserModel;


const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, minlength: 4 },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: false },
    name: { type: String, required: false },
    cover: { type: String, required: false },
    age: { type: Number, required: false },
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
