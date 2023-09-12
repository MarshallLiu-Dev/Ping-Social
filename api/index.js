require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require('./models/Post');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// eslint-disable-next-line no-unused-vars
const path = require('path');

app.use(cors({ credentials: true, origin: "" }));
app.use(express.json());
app.use(cookieParser());
app.use('uploads', express.static(__dirname + 'uploads'));


const directory = path.join(__dirname, 'uploads');

if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });


// Rotas do  código inicio

app.post('/register', upload.single('file'), async (req, res) => {
    const { username, password, name, email, phone, age } = req.body;

    try {
        
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        
        const fileData = req.file; 
        const userDoc = await User.create({
            username,
            password: hashedPassword,
            name,
            email,
            phone,
            age,
            file: fileData,
        });

        res.status(200).json(userDoc);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: 'Erro no cadastro' });
    }
});



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });

    if (!userDoc) {
        return res.status(400).json("Falha ao realizar o Login");
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;

            const responseJSON = {
                id: userDoc._id,
                username,
                profileImage: userDoc.profileImage,
            };

            res.cookie('token', token).json(responseJSON);
        });
    } else {
        res.status(400).json("Falha ao realizar o Login");
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

app.post('/post', upload.single('file'), async (req, res) => {
    let coverPath = null;

    if (req.file) {
        const { originalname, buffer } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];

        const filename = `${Date.now()}.${ext}`;
        const filePath = path.join(__dirname, 'uploads', filename);

        fs.writeFileSync(filePath, buffer);
        coverPath = `uploads/${filename}`;
        console.log('File path:', filePath);

    }

    const { token } = req.cookies;

    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        const { title, summary, content } = req.body;

        try {
            const postDoc = await Post.create({
                title,
                summary,
                content,
                cover: coverPath, 
                author: info.id,
                name: info.name,
            });

            res.status(201).json(postDoc);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar a postagem' });
        }
    });
});




app.get('/post', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username', 'name'])
            .sort({ createdAt: -1 })
            .limit(20)
    );
});

app.get('/perfil', async (req, res) => {
    try {
        const { token } = req.cookies;
        const decodedToken = jwt.verify(token, secret);
        const user = await User.findById(decodedToken.id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const userPosts = await Post.find({ author: user._id });

        res.json({
            username: user.username,
            email: user.email,
            name: user.name,
            age: user.age,
            posts: userPosts, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o perfil do usuário' });
    }
});

app.put('/perfil', async (req, res) => {
    try {
        const userId = req.user.id;
        const { username } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json({ username: updatedUser.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar o nome de perfil do usuário' });
    }
});

app.put('/post', uploadMiddleware.single('file'), async (req, res) => {
    let newPath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { id, title, summary, content } = req.body;
        const postDoc = await Post.findById(id);
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        if (!isAuthor) {
            return res.status(400).json('voce não é o autor');
        }
        await postDoc.update({
            title,
            summary,
            content,
            cover: newPath ? newPath : postDoc.cover,
        });

        res.json(postDoc);
    });

});

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})

// Rotas do código fim

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
