// Quase Funcional 




// não funciona

// const mongoose = require('mongoose');
// const multer = require('multer');
// const { Schema, model } = mongoose;

// const UserSchema = new Schema({
//     username: { type: String, required: true, min: 4, unique: true },
//     password: { type: String, required: true },
//     phoneNumber: { type: Number, required: false },
//     email: { type: String, required: false },
//     name: { type: String, required: false },
//     profileImage: {
//         data: Buffer,
//         contentType: String
//     },
// });

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, './uploads');
//         },
//         filename: (req, file, cb) => {
//             cb(null, file.originalname);
//         }
//     })
// });

// const UserModel = model('User', UserSchema, {
//     plugins: [upload]
// });

// module.exports = UserModel;


// Funcional
// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const UserSchema = new Schema({
//     username: { type: String, required: true, min: 4, unique: true },
//     password: { type: String, required: true },
//     phoneNumber: { type: Number, required: false },
//     email: { type: String, required: false },
//     name: { type: String, required: false },
//     profileImage: {
//         data: Buffer,
//         contentType: String
//     },
// });

// const UserModel = model('User', UserSchema);

// module.exports = UserModel;

// Funcional fim

// Teste inicil 

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    email: { type: String, required: false },
    name: { type: String, required: false },
    cover: { type: String, required: false }, // Add the 'cover' field
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
