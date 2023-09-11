import About from './About';
import './App.css';
import Footer from './Footer';
import Layout from './Layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPages';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import Perfil from './pages/perfil';
import EditPost from './pages/EditPost';
import PostPage from './pages/PostPage'
import ApagarPerfil from './pages/ApagarConta';
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext"; // Importe o UserContextProvider

function App() {
  return (
    <UserContextProvider> 
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/delete-profile" element={<ApagarPerfil />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
          </Route>
          
        </Routes>
        <Footer />
      </>
    </UserContextProvider>
  );
}

export default App;
