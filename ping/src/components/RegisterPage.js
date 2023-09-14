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
            <h1>Inscrever-se</h1>
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
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="E-mail"
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
