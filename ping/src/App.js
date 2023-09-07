import About from './About';
import './App.css';
import Footer from './Footer';
import Layout from './Layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPages';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
