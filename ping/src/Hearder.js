// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useUserContext } from "./UserContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faUser, faPenToSquare, faArrowRightFromBracket, faRightToBracket, faUserPen, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";

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
//                 <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
//                 {username && (
//                     <>
//                         <Link to="/create"><FontAwesomeIcon icon={faPenToSquare} /> Novo Ping</Link>
//                         {profileImage && (
//                             <img
//                                 src={profileImage}
//                                 alt={`Imagem de perfil de ${username}`}
//                                 className="profile-image"
//                             />
//                         )}
//                         <Link to="/perfil"><FontAwesomeIcon icon={faUser} /><span className="username">  @{username}</span></Link>
//                         <Link to="/about"><FontAwesomeIcon icon={faInfo} /> Sobre</Link>
//                         <Link to="/delete-profile"><FontAwesomeIcon icon={faCog} />Configurações</Link> 
//                         <a onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sair</a>
//                     </>
//                 )}
                
//                 {!username && (
//                     <>
//                         <Link to="/login"><FontAwesomeIcon icon={faRightToBracket}/> Login</Link>
//                         <Link to="/register"><FontAwesomeIcon icon={faUserPen} /> Registre-se</Link>
//                         <Link to="/about"><FontAwesomeIcon icon={faInfo} /> Sobre</Link>
//                     </>
//                 )}
                
//             </nav>
//         </header>
//     );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenToSquare,
  faUser,
  faUserPen,
  faCog,
  faInfo,
  faArrowRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

// Importar os componentes do Material Tailwind React
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Header() {
  const { setUserInfo, userInfo } = useUserContext();
  const [openNav, setOpenNav] = useState(false); // Declare openNav como um estado

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
      });
  }

  const username = userInfo?.username;
  const profileImage = userInfo?.profileImage;

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          P<span className="highlight">i</span>ng
        </Typography>
        <div className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="p-1 font-normal">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} /> Home
              </Link>
            </li>
            {/* Adicione mais links aqui conforme necessário */}
          </ul>
        </div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
        >
          <span>Buy Now</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <ul className="mb-4 mt-2 flex flex-col gap-2">
            <li className="p-1 font-normal">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} /> Home
              </Link>
            </li>
            {/* Adicione mais links aqui conforme necessário */}
          </ul>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
          >
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}






