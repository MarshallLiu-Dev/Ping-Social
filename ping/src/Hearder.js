/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPenToSquare, faArrowRightFromBracket, faRightToBracket, faUserPen, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const { setUserInfo, userInfo } = useUserContext();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:5000/profile", {
                    credentials: "include",
                });
                if (response.ok) {
                    const userInfo = await response.json();
                    setUserInfo(userInfo);
                } else {
                    throw new Error("Failed to fetch user profile");
                }
            } catch (error) {
                console.error(error);
                // handle error here
            }
        };
        fetchUserProfile();
    }, [setUserInfo]);

    function logout() {
        fetch("http://localhost:5000/logout", {
            credentials: "include",
            method: "POST",
        })
            .then(() => {
                setUserInfo(null);
            })
            .catch((error) => {
                console.error(error);
                // handle error here
            });
    }

    const username = userInfo?.username;
    const profileImage = userInfo?.profileImage; // Obtenha a URL da imagem de perfil

    return (
        <header>
            <Link to="/" className="logo">
                P<span className="highlight">i</span>ng
            </Link>
            <nav>
                <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
                <Link to="/about"><FontAwesomeIcon icon={faUser} /> Sobre</Link>
                {username && (
                    <>
                        <Link to="/create"><FontAwesomeIcon icon={faPenToSquare} /> Novo Ping</Link>
                        {profileImage && (
                            <img
                                src={profileImage}
                                alt={`Imagem de perfil de ${username}`}
                                className="profile-image"
                            />
                        )}
                        <Link to="/perfil"><FontAwesomeIcon icon={faCog} /><span className="username">  @{username}</span></Link>
                        <a onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sair</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login"><FontAwesomeIcon icon={faRightToBracket}/> Login</Link>
                        <Link to="/register"><FontAwesomeIcon icon={faUserPen} /> Registre-se</Link>
                    </>
                )}
            </nav>
        </header>
    );
}





// eslint-disable-next-line no-lone-blocks
{/* <nav>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                    <span className="nav-text">Home</span>
                </Link>
                <Link to="/about">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="nav-text">Sobre</span>
                </Link>
                {username && (
                    <>
                        <Link to="/create" className="mobile-icon">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                        {profileImage && (
                            <img
                                src={profileImage}
                                alt={`Imagem de perfil de ${username}`}
                                className="profile-image"
                            />
                        )}
                        <span className="username">@{username}</span>
                        <a onClick={logout} className="mobile-icon">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login" className="mobile-icon">
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </Link>
                        <Link to="/register" className="mobile-icon">
                            <FontAwesomeIcon icon={faUserPen} />
                        </Link>
                    </>
                )}
            </nav> */}