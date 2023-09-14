import React, { useEffect, useState } from "react";
import { useUserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function ApagarPerfil() {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUserContext();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

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

    const handleDeleteProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/delete-profile", {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate("/"); // Redirecionar para a página inicial
            } else {
                throw new Error("Failed to delete profile");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Apagar Perfil</h1>
            <p>Tem certeza de que deseja apagar seu perfil? Esta ação não pode ser desfeita.</p>
            <button onClick={handleDeleteProfile}>Apagar Perfil</button>
        </div>
    );
}

