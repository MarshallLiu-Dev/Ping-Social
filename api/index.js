const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const cookieParser = require('cookie-parser');


app.use(cors({ credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://pingSocial:18235780@appstoreserversra22.wt05m6o.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

app.post('/register', async(req, res) => {
    const { username, password, name, email, birthday, phoneNumber } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
            birthday,
            email,
            phoneNumber,
            name
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error)
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if(passOk){
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    }else{
        res.status(400).json("Falha ao realizar o Login")
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});











const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


