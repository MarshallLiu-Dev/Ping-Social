import Post from "../pages/Post";
import PingBox from "./PingBox";
import '../App.css';
import { useEffect, useState } from "react";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('erro ao acessar os posts');
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    return (
        <>

        <>
                <PingBox/>
        
        </>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {posts.length > 0 && posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))}
                </>
            )}
            <div className="footer-container">
                <h3>Apresentando o Ping Social, Uma rede social para você</h3>
                <p>Copyright &copy; 2023 Ping Social | TODOS OS DIREITOS RESERVADOS</p>
            </div>
        </>
    );
}