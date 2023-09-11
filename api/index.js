const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require('./models/Post');
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

// teste perfil
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

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

app.post("/register", upload.single("profileImage"), async (req, res) => {
    const { username, password, name, email, birthday, phoneNumber } = req.body;
    const profileImage = req.file ? req.file.buffer : null; // Obtenha a imagem de perfil como buffer

    try {
        // Verifique se o usuário já existe com o mesmo nome de usuário
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Nome de usuário já em uso." });
        }

        // Hash da senha usando bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Crie um novo usuário com a imagem de perfil
        const newUser = new User({
            username,
            password: hashedPassword,
            birthday,
            email,
            phoneNumber,
            name,
            profileImage, // Armazene a imagem de perfil no documento do usuário
        });

        await newUser.save();

        res.status(200).json({ message: "Cadastro Realizado com Sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao realizar o cadastro" });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;

            // Inclua a URL da foto de perfil no JSON de resposta
            const responseJSON = {
                id: userDoc._id,
                username,
                profileImage: userDoc.profileImage, // Suponhamos que a URL da foto de perfil esteja em userDoc.profileImage
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

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    let coverPath = null;

    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);

        coverPath = newPath;
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
                name:info.name,
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
        // Certifique-se de que você tem o token do usuário autenticado
        const { token } = req.cookies;

        // Verifique e decodifique o token para obter as informações do usuário
        const decodedToken = jwt.verify(token, secret);

        // Use o ID do usuário do token para buscar as informações no banco de dados
        const user = await User.findById(decodedToken.id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Enviar as informações de nome e email como parte da resposta
        res.json({
            username: user.username,
            email: user.email,
            name: user.name, // Adicione o campo 'name' se ele estiver disponível no seu modelo de usuário
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


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// arquivo duncional
// app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
//     let coverPath = null; // Initialize coverPath as null

//     if (req.file) {
//         // If a file was uploaded, process it
//         const { originalname, path } = req.file;
//         const parts = originalname.split('.');
//         const ext = parts[parts.length - 1];
//         const newPath = path + '.' + ext;
//         fs.renameSync(path, newPath);

//         coverPath = newPath; // Set coverPath if a file was uploaded
//     }

//     const { token } = req.cookies;

//     jwt.verify(token, secret, {}, async (err, info) => {
//         if (err) throw err;

//         const { title, summary, content } = req.body;
//         const postDoc = await Post.create({
//             title,
//             summary,
//             content,
//             cover: coverPath, // Use coverPath, which may be null if no file was uploaded
//             author: info.id,
//         });
//         res.json(postDoc);
//     });
// });






















// app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
//     const { originalname, path } = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1];
//     const newPath = path + '.' + ext;
//     fs.renameSync(path, newPath);

//     const { token } = req.cookies;
//     jwt.verify(token, secret, {}, async (err, info) => {
//         if (err) throw err;
//         const { title, summary, content } = req.body;
//         const postDoc = await Post.create({
//             title,
//             summary,
//             content,
//             cover: newPath,
//             author: info.id,
//         });
//         res.json(postDoc);
//     });

// });


// Erro na URI

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const Post = require('./models/Post');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cookieParser = require('cookie-parser');
// const multer = require('multer');
// const uploadMiddleware = multer({ dest: 'uploads/' });
// const fs = require('fs');


// const secret = 'asdfe45we45w345wegw345werjktjwertkj';
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Configuração do dotenv para carregar variáveis de ambiente
// require('dotenv').config();

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(express.json());
// app.use(cookieParser());
// app.use('/uploads', express.static(__dirname + '/uploads'));

// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch(err => {
//         console.error("MongoDB connection error:", err);
//     });


// // // Rotas do  código inicio 
// app.post("/register", upload.single("profileImage"), async (req, res) => {
//     const { username, password, name, email, birthday, phoneNumber } = req.body;
//     const profileImage = req.file ? req.file.buffer : null; // Obtenha a imagem de perfil como buffer

//     try {
//         // Verifique se o usuário já existe com o mesmo nome de usuário
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: "Nome de usuário já em uso." });
//         }

//         // Hash da senha usando bcrypt
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Crie um novo usuário com a imagem de perfil
//         const newUser = new User({
//             username,
//             password: hashedPassword,
//             birthday,
//             email,
//             phoneNumber,
//             name,
//             profileImage, // Armazene a imagem de perfil no documento do usuário
//         });

//         await newUser.save();

//         res.status(200).json({ message: "Cadastro Realizado com Sucesso" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Erro ao realizar o cadastro" });
//     }
// });

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const userDoc = await User.findOne({ username });
//     const passOk = bcrypt.compareSync(password, userDoc.password);

//     if (passOk) {
//         jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
//             if (err) throw err;

//             // Inclua a URL da foto de perfil no JSON de resposta
//             const responseJSON = {
//                 id: userDoc._id,
//                 username,
//                 profileImage: userDoc.profileImage, // Suponhamos que a URL da foto de perfil esteja em userDoc.profileImage
//             };

//             res.cookie('token', token).json(responseJSON);
//         });
//     } else {
//         res.status(400).json("Falha ao realizar o Login");
//     }
// });

// app.get('/profile', (req, res) => {
//     const { token } = req.cookies;
//     jwt.verify(token, secret, {}, (err, info) => {
//         if (err) throw err;
//         res.json(info);
//     });
// });

// app.post('/logout', (req, res) => {
//     res.cookie('token', '').json('ok');
// });


// app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
//     let coverPath = null; // Initialize coverPath as null

//     if (req.file) {
//         // If a file was uploaded, process it
//         const { originalname, path } = req.file;
//         const parts = originalname.split('.');
//         const ext = parts[parts.length - 1];
//         const newPath = path + '.' + ext;
//         fs.renameSync(path, newPath);

//         coverPath = newPath; // Set coverPath if a file was uploaded
//     }

//     const { token } = req.cookies;

//     jwt.verify(token, secret, {}, async (err, info) => {
//         if (err) throw err;

//         const { title, summary, content } = req.body;
//         const postDoc = await Post.create({
//             title,
//             summary,
//             content,
//             cover: coverPath, // Use coverPath, which may be null if no file was uploaded
//             author: info.id,
//         });
//         res.json(postDoc);
//     });
// });

// app.get('/post', async (req, res) => {
//     res.json(
//         await Post.find()
//             .populate('author', ['username'])
//             .sort({ createdAt: -1 })
//             .limit(20)
//     );
// });

// // Rota para obter informações do perfil do usuário
// app.get('/perfil', async (req, res) => {
//     try {
//         const userId = req.user.id; // Você pode obter o ID do usuário a partir do token JWT
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }
//         res.status(200).json({ username: user.username });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erro ao buscar o perfil do usuário' });
//     }
// });

// // Rota para atualizar o nome de perfil do usuário
// app.put('/perfil', async (req, res) => {
//     try {
//         const userId = req.user.id; // Você pode obter o ID do usuário a partir do token JWT
//         const { username } = req.body;

//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             { username },
//             { new: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }

//         res.status(200).json({ username: updatedUser.username });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erro ao atualizar o nome de perfil do usuário' });
//     }
// });

// // // Rotas do código fim 

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


