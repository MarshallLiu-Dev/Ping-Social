import Post from "../Post";
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
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {posts.length > 0 && posts.map(post => (
                        <Post key={post.id} {...post} />
                    ))}
                </>
            )}
        </>
    );
}