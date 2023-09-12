// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegisterPage() {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [age, setAge] = useState("");
//     const [bio, setBio] = useState("");
//     const [profileImage, setProfileImage] = useState(null);

//     async function register(ev) {
//         ev.preventDefault();

//         const formData = new FormData();
//         formData.append('username', username);
//         formData.append('password', password);
//         formData.append("name", name);
//         formData.append("email", email);
//         formData.append("phone", phone);
//         formData.append("age", age);
//         formData.append("bio", bio);
//         formData.append('profileImage', profileImage); // Adicione a imagem ao formulário

//         const response = await fetch('http://localhost:5000/register', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.status === 200) {
//             alert('Cadastro Realizado com Sucesso');
//             navigate("/login");
//         } else {
//             alert('Erro ao realizar o cadastro');
//         }
//     }

//     function handleImageChange(event) {
//         const file = event.target.files[0];
//         setProfileImage(file);
//     }

//     return (
//         <form className="register" onSubmit={register}>
//             <h1>Registre-se</h1>
//             <input
//                 type="text"
//                 placeholder="Nome de Usuário"
//                 value={username}
//                 onChange={(ev) => setUsername(ev.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Senha"
//                 value={password}
//                 onChange={(ev) => setPassword(ev.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Nome Completo"
//                 value={name}
//                 onChange={(ev) => setName(ev.target.value)}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(ev) => setEmail(ev.target.value)}
//             />
//             <input
//                 type="tel"
//                 placeholder="Telefone"
//                 value={phone}
//                 onChange={(ev) => setPhone(ev.target.value)}
//             />
//             <input
//                 type="text" // Alterado de "number" para "text"
//                 placeholder="Idade"
//                 value={age}
//                 onChange={(ev) => setAge(ev.target.value)}
//             />
//             <input
//                 type="text" // Alterado de "bio" para "text"
//                 placeholder="Biografia"
//                 value={bio}
//                 onChange={(ev) => setBio(ev.target.value)}
//             />
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//             />
//             <button>Criar nova conta</button>
//         </form>
//     );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        age: '',
        bio: '',
        file: null,
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function register(ev) {
        ev.preventDefault();
        setError(null);
        setLoading(true);

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: formDataToSend,
        });

        setLoading(false);

        if (response.status === 200) {
            alert('Cadastro Realizado com Sucesso');
            navigate("/login");
        } else {
            const data = await response.json();
            setError(data.error || 'Erro ao realizar o cadastro');
        }
    }

    const handleInputChange = (ev) => {
        const { name, value, files } = ev.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    return (
        <form className="register" onSubmit={register}>
            <h1>Registre-se</h1>
            <input
                type="text"
                name="username"
                placeholder="Nome de Usuário"
                value={formData.username}
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="age"
                placeholder="Idade"
                value={formData.age}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="bio"
                placeholder="Biografia"
                value={formData.bio}
                onChange={handleInputChange}
            />
            <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleInputChange}
            />
            {error && <div className="error">{error}</div>}
            <button disabled={loading}>Criar nova conta</button>
        </form>
    );
}
