import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    async function register(ev) {
        ev.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("age", age);

        if (profileImage) {
            formData.append("profileImage", profileImage);
        }

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                body: formData,
            });

            if (response.status === 200) {
                alert("Cadastro Realizado com Sucesso");
                navigate("/login"); // Redirecione para a página de login
            } else {
                alert("Erro ao realizar o cadastro");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao realizar o cadastro");
        }
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Registre-se</h1>
            <input
                type="text"
                placeholder="Nome de Usuário"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
            />
            <input
                type="number"
                placeholder="Idade"
                value={age}
                onChange={(ev) => setAge(ev.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(ev) => setProfileImage(ev.target.files[0])}
            />
            <button>Criar nova conta</button>
        </form>
    );
}


// import React, { useState } from "react";

// export default function RegisterPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [age, setAge] = useState("");
//     const [profileImage, setProfileImage] = useState(null);

//     async function register(ev) {
//         ev.preventDefault();

//         const formData = new FormData();
//         formData.append("username", username);
//         formData.append("password", password);
//         formData.append("name", name);
//         formData.append("email", email);
//         formData.append("phone", phone);
//         formData.append("age", age);

//         if (profileImage) {
//             formData.append("profileImage", profileImage);
//         }

//         try {
//             const response = await fetch("http://localhost:5000/register", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (response.status === 200) {
//                 alert("Cadastro Realizado com Sucesso");
//             } else {
//                 alert("Erro ao realizar o cadastro");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Erro ao realizar o cadastro");
//         }
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
//                 type="number"
//                 placeholder="Idade"
//                 value={age}
//                 onChange={(ev) => setAge(ev.target.value)}
//             />
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(ev) => setProfileImage(ev.target.files[0])}
//             />
//             <button>Criar nova conta</button>
//         </form>
//     );
// }












// Quase funcional

// import React, { useState } from "react";

// export default function RegisterPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [profileImage, setProfileImage] = useState(null);

//     async function register(ev) {
//         ev.preventDefault();

//         const formData = new FormData();
//         formData.append("username", username);
//         formData.append("password", password);
//         if (profileImage) {
//             formData.append("profileImage", profileImage);
//         }

//         try {
//             const response = await fetch("http://localhost:5000/register", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (response.status === 200) {
//                 alert("Cadastro Realizado com Sucesso");
//             } else {
//                 alert("Erro ao realizar o cadastro");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Erro ao realizar o cadastro");
//         }
//     }

//     return (
//         <form className="register" onSubmit={register}>
//             <h1>Registre-se</h1>
//             <input
//                 type="text"
//                 placeholder="Nome de Usuario"
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
//                 type="file"
//                 accept="image/*"
//                 onChange={(ev) => setProfileImage(ev.target.files[0])}
//             />
//             <button>Criar nova conta</button>
//         </form>
//     );
// }
