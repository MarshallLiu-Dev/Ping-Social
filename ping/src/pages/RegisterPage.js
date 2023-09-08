// import { useState } from "react";

// export default function RegisterPage() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     async function register(ev) {
//         ev.preventDefault();
//         const response = await fetch('http://localhost:5000/register', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (response.status === 200) {
//             alert('Cadastro Realizado com Sucesso');
//         } else {
//             alert('Erro ao realizar o cadastro');
//         }
//     }
//     return (
//         <form className="register" onSubmit={register}>
//             <h1>Registre-se</h1>
//             <input type="text"
//                 placeholder="Nome de Usuario"
//                 value={username}
//                 onChange={ev => setUsername(ev.target.value)} />
//             <input type="password"
//                 placeholder="Senha"
//                 value={password}
//                 onChange={ev => setPassword(ev.target.value)} />
//             <button>Criar nova conta</button>
//         </form>
//     );
// }


// Quase funcional

import React, { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    async function register(ev) {
        ev.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
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
                placeholder="Nome de Usuario"
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
                type="file"
                accept="image/*"
                onChange={(ev) => setProfileImage(ev.target.files[0])}
            />
            <button>Criar nova conta</button>
        </form>
    );
}



// Teste

// import React, { useState } from "react";

// export default function RegisterPage() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [cover, setCover] = useState(null); // Use null as initial state for cover

//     async function register(ev) {
//         ev.preventDefault();
//         const formData = new FormData();
//         formData.append('username', username);
//         formData.append('password', password);
//         formData.append('cover', cover); // Append the cover file to the form data

//         const response = await fetch('http://localhost:5000/register', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.status === 200) {
//             alert('Cadastro Realizado com Sucesso');
//         } else {
//             alert('Erro ao realizar o cadastro');
//         }
//     }

//     // Handle file input change
//     function handleCoverChange(ev) {
//         const file = ev.target.files[0]; // Get the first selected file
//         setCover(file);
//     }

//     return (
//         <form className="register" onSubmit={register}>
//             <h1>Registre-se</h1>
//             <input
//                 type="text"
//                 placeholder="Nome de Usuario"
//                 value={username}
//                 onChange={ev => setUsername(ev.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Senha"
//                 value={password}
//                 onChange={ev => setPassword(ev.target.value)}
//             />
//             <input
//                 type="file" // Use input type 'file' for cover image upload
//                 accept="image/*" // Allow only image files
//                 onChange={handleCoverChange} // Handle file input change
//             />
//             <button>Criar nova conta</button>
//         </form>
//     );
// }

