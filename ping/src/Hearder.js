/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom";
// import './App.css';
// import React, { useEffect } from "react";
// import { useContext } from "react";
// import { UserContext } from "./UserContext";


// export default function Header() {
//     const { setUserInfo, userInfo } = useContext(UserContext);

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/profile', {
//                     credentials: 'include',
//                 });
//                 if (response.ok) {
//                     const userInfo = await response.json();
//                     setUserInfo(userInfo);
//                 } else {
//                     throw new Error('Failed to fetch user profile');
//                 }
//             } catch (error) {
//                 console.error(error);
//                 // handle error here
//             }
//         };
//         fetchUserProfile();
//     }, []);

//     function logout() {
//         fetch('http://localhost:5000/logout', {
//             credentials: 'include',
//             method: 'POST',
//         })
//             .then(() => {
//                 setUserInfo(null);
//             })
//             .catch(error => {
//                 console.error(error);
//                 // handle error here
//             });
//     }

//     const username = userInfo?.username;

//     return (
//         <header>
//             <Link to="/" className="logo">
//                 P<span className="highlight">i</span>ng
//             </Link>
//             <nav>
//                 <Link to="/">Inicio</Link>
//                 <Link to="/about">Sobre</Link>
//                 {username && (
//                     <>
//                         <Link to="/">Novo Ping</Link>
//                         <button onClick={logout}>Sair ({username})</button>
//                     </>
//                 )}
//                 {!username && (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Registre-se</Link>
//                     </>
//                 )}
//             </nav>
//         </header>
//     );
// }




// // Header.js
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "./UserContext";

// export default function Header() {
//     const { setUserInfo, userInfo } = useUserContext();

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/profile', {
//                     credentials: 'include',
//                 });
//                 if (response.ok) {
//                     const userInfo = await response.json();
//                     setUserInfo(userInfo);
//                 } else {
//                     throw new Error('Failed to fetch user profile');
//                 }
//             } catch (error) {
//                 console.error(error);
//                 // handle error here
//             }
//         };
//         fetchUserProfile();
//     }, [setUserInfo]);

//     function logout() {
//         fetch('http://localhost:5000/logout', {
//             credentials: 'include',
//             method: 'POST',
//         })
//             .then(() => {
//                 setUserInfo(null);
//             })
//             .catch(error => {
//                 console.error(error);
//                 // handle error here
//             });
//     }

//     const username = userInfo?.username;

//     return (
//         <header>
//             <Link to="/" className="logo">
//                 P<span className="highlight">i</span>ng
//             </Link>
//             <nav>
//                 <Link to="/">Inicio</Link>
//                 <Link to="/about">Sobre</Link>
//                 {username && (
//                     <>
//                         <Link to="/create">Novo Ping</Link>
//                         <button onClick={logout}>Sair ({username})</button>
//                     </>
//                 )}
//                 {!username && (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Registre-se</Link>
//                     </>
//                 )}
//             </nav>
//         </header>
//     );
// }



// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "./UserContext";

// export default function Header() {
//     const { setUserInfo, userInfo } = useUserContext();

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/profile", {
//                     credentials: "include",
//                 });
//                 if (response.ok) {
//                     const userInfo = await response.json();
//                     setUserInfo(userInfo);
//                 } else {
//                     throw new Error("Failed to fetch user profile");
//                 }
//             } catch (error) {
//                 console.error(error);
//                 // handle error here
//             }
//         };
//         fetchUserProfile();
//     }, [setUserInfo]);

//     function logout() {
//         fetch("http://localhost:5000/logout", {
//             credentials: "include",
//             method: "POST",
//         })
//             .then(() => {
//                 setUserInfo(null);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 // handle error here
//             });
//     }

//     const username = userInfo?.username;
//     const profileImage = userInfo?.profileImage; // Obtenha a URL da imagem de perfil

//     return (
        // <header>
        //     <Link to="/" className="logo">
        //         P<span className="highlight">i</span>ng
        //     </Link>
        //     <nav>
        //         <Link to="/">Inicio</Link>
        //         <Link to="/about">Sobre</Link>
        //         {username && (
        //             <>
        //                 <Link to="/create">Novo Ping</Link>
        //                 {profileImage && (
        //                     <img
        //                         src={profileImage} // Exibe a imagem de perfil
        //                         alt={`Imagem de perfil de ${username}`}
        //                         className="profile-image"
        //                     />
        //                 )}
        //                 <button onClick={logout}>Sair (@{username})</button>
        //             </>
        //         )}
        //         {!username && (
        //             <>
        //                 <Link to="/login">Login</Link>
        //                 <Link to="/register">Registre-se</Link>
        //             </>
        //         )}
        //     </nav>
        // </header>



 /* Conteúdo que pode ser colapsado */


// import React, { useEffect, useState } from "react"; // Importe useState aqui
// import { Link } from "react-router-dom";
// import { useUserContext } from "./UserContext";

// export default function Header() {
//     const { setUserInfo, userInfo } = useUserContext();
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//     };
//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/profile", {
//                     credentials: "include",
//                 });
//                 if (response.ok) {
//                     const userInfo = await response.json();
//                     setUserInfo(userInfo);
//                 } else {
//                     throw new Error("Failed to fetch user profile");
//                 }
//             } catch (error) {
//                 console.error(error);
//                 // handle error here
//             }
//         };
//         fetchUserProfile();
//     }, [setUserInfo]);

//     function logout() {
//         fetch("http://localhost:5000/logout", {
//             credentials: "include",
//             method: "POST",
//         })
//             .then(() => {
//                 setUserInfo(null);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 // handle error here
//             });
//     }

//     const username = userInfo?.username;
//     const profileImage = userInfo?.profileImage;

//     return (
//         <header>
//             <Link to="/" className="logo">
//                 P<span className="highlight">i</span>ng
//             </Link>
//             <nav>
//                 <Link to="/">Inicio</Link>
//                 <Link to="/about">Sobre</Link>
//                 {username && (
//                     <>
//                         <Link to="/create">Novo Ping</Link>
//                         {profileImage && (
//                             <img
//                                 src={profileImage}
//                                 alt={`Imagem de perfil de ${username}`}
//                                 className="profile-image"
//                             />
//                         )}
//                         <span className="username">@{username}</span>
//                         {/* Use isCollapsed para alternar entre Expandir e Ocultar */}
//                         <button onClick={toggleCollapse}>
//                             {isCollapsed ? "..." : "..."}
//                         </button>
//                     </>
//                 )}
//                 {!username && (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Registre-se</Link>
//                     </>
//                 )}
//             </nav>
            
//             {!isCollapsed && (
//                 <div className="collapsed-content">
//                     <a onClick={logout}>Sair</a>
//                 </div>
//             )}
//         </header>
//     );
// }


//Funcional 

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "./UserContext";

// export default function Header() {
//     const { setUserInfo, userInfo } = useUserContext();

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/profile", {
//                     credentials: "include",
//                 });
//                 if (response.ok) {
//                     const userInfo = await response.json();
//                     setUserInfo(userInfo);
//                 } else {
//                     throw new Error("Failed to fetch user profile");
//                 }
//             } catch (error) {
//                 console.error(error);
//                 // handle error here
//             }
//         };
//         fetchUserProfile();
//     }, [setUserInfo]);

//     function logout() {
//         fetch("http://localhost:5000/logout", {
//             credentials: "include",
//             method: "POST",
//         })
//             .then(() => {
//                 setUserInfo(null);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 // handle error here
//             });
//     }

//     const username = userInfo?.username;
//     const profileImage = userInfo?.profileImage; // Obtenha a URL da imagem de perfil

//     return (
//         <header>
//             <Link to="/" className="logo">
//                 P<span className="highlight">i</span>ng
//             </Link>
//             <nav>
//                 <Link to="/"><i class="fa-solid fa-house">Home</i></Link>
//                 <Link to="/about"><i class="fa-solid fa-user">Sobre</i></Link>
//                 {username && (
//                     <>
//                         <Link to="/create"><i class="fa-solid fa-pen-to-square">Novo Ping</i></Link>
//                         {profileImage && (
//                             <img
//                                 src={profileImage}
//                                 alt={`Imagem de perfil de ${username}`}
//                                 className="profile-image"
//                             />
//                         )}
//                         <span className="username">@{username}</span>
//                         <a onClick={logout}><i class="fa-solid fa-arrow-right-from-bracket">Sair</i></a>
//                     </>
//                 )}
//                 {!username && (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/register">Registre-se</Link>
//                     </>
//                 )}
//             </nav>
//         </header>
//     );
// }



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPenToSquare, faArrowRightFromBracket, faRightToBracket, faUserPen } from "@fortawesome/free-solid-svg-icons";

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
                        <span className="username">@{username}</span>
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
