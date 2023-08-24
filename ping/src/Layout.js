import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./Hearder";
export default function Layout() {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    );
}