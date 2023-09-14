import './App.css';
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext"; // Importe o UserContextProvider
import Layout from './layouts/Layout';
import IndexPage from './components/indexPage';
import About from './pages/About';
import LoginPage from './components/LoginPages';
import Perfil from './components/perfil.js';
import ApagarPerfil from './components/ApagarConta';
import RegisterPage from './components/RegisterPage'
import CreatePost from './components/CreatePost';
import PingBox from './components/PingBox';
import EditPost from './pages/Editor';

function App() {
  return (
    <UserContextProvider> 
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/delete-profile" element={<ApagarPerfil />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/create" element={<PingBox />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Route>   
        </Routes>
      </>
    </UserContextProvider>
  );
}

export default App;
