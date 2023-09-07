import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('Cadastro Realizado com Sucesso');
        } else {
            alert('Erro ao realizar o cadastro');
        }
    }
    return (
        <form className="register" onSubmit={register}>
            <h1>Registre-se</h1>
            <input type="text"
                placeholder="Nome de Usuario"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />
            <input type="password"
                placeholder="Senha"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
            <button>Criar nova conta</button>
        </form>
    );
}