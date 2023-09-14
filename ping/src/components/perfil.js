import React, { useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import Post from "../pages/Post";
import imagemPadrao from '../images/Unicornio.png';

export default function Perfil(author,) {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUserContext();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:5000/perfil", {
                    credentials: "include",
                });
                if (response.ok) {
                    const userProfile = await response.json();
                    setUserInfo(userProfile);
                    setFormData({
                        username: userProfile.username || "",
                        email: userProfile.email || "",
                        password: "",
                    });
                } else {
                    throw new Error("Failed to fetch user profile");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserProfile();
    }, [setUserInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const updateUsername = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://ping-server-api.vercel.app/perfil", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: formData.username }),
                credentials: "include",
            });
            if (response.ok) {
                const updatedUserInfo = await response.json();
                setUserInfo(updatedUserInfo);
                setIsEditing(false);
            } else {
                throw new Error("Failed to update username");
            }
        } catch (error) {
            console.error(error);
        }
    };

    function logout() {
        fetch("http://localhost:5000/logout", {
            credentials: "include",
            method: "POST",
        })
            .then(() => {
                setUserInfo(null);
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const renderPosts = () => {
        if (userInfo.posts && userInfo.posts.length > 0) {
            return (
                <div className="user-posts">
                    {/* <h2>Posts do Usuário</h2> */}
                    {userInfo.posts.map((post) => (
                        <Post key={post._id} {...post} />
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderForm = () => {
        if (isEditing) {
            return (
                <form className="form-login" onSubmit={updateUsername}>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Seu nome de usuário"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Sua senha"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Atualizar Perfil</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Cancelar
                    </button>
                </form>
            );
        } else {
            return (
                <>
                    <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
                </>
            );
        }
    };

    return (
        <div className="feed">
            <h1>{userInfo.name}</h1>

            <div className="post-feed">
                <h2>
                    {author ? (
                        <img src={'http://localhost:5000/' + author.Perfil} alt={author.name} className="author-image" />
                    ) : (
                        <img src={imagemPadrao} alt="Imagem Padrão" className="author-image" />
                    )}
                    </h2>
                <p>
                    <strong>{userInfo.name}</strong> 
                </p>
                <p>
                    @{userInfo.username}
                </p>
                <p>
                    <strong>{userInfo.email}</strong> 
                </p>
                <p>
                    <strong>Idade:</strong> {userInfo.age}
                </p>
                <p>
                    <strong>{userInfo.bio}</strong> 
                </p>
            </div>

            {renderForm()}

            <br />

            <button className="logout-button" onClick={logout}>
                Sair do Ping
            </button>

            <div className="post-feed">
                {renderPosts()}
            </div>
        </div>
    );
    
}


