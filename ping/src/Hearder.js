import { Link } from "react-router-dom";
import './App.css';
export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">Ping</Link>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Registra-se</Link>
            </nav>
        </header>
    );
}