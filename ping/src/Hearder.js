/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import './App.css';
import { useContext, useEffect} from "react";
import { UserContext } from "./UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    },[]);

    function logout() {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
       
    };

    const username = userInfo?.username;
    
    return (
        <header>
            <Link to="/" className="logo">P<span className="highlight">i</span>ng</Link>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre</Link>
                {username && (
                    <>
                        <Link to='/'>Novo Ping</Link> 
                        <a onClick={logout}>Sair  ({username})</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Registre-se</Link>
                    </>
                )}


            </nav>
        </header>
    );
}