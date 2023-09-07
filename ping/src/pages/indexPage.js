import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    );
}


// import React, { useEffect, useState } from "react";
// import Post from "../Post";
// export default function IndexPage() {
//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState(null); // Novo estado para lidar com erros

//     useEffect(() => {
//         fetch("http://localhost:3000/post")
//             .then((response) => {
//                 if (!response.ok) {
//                     // Verifica se a resposta HTTP não está ok (por exemplo, status 404)
//                     throw new Error("Erro na requisição. Status: " + response.status);
//                 }
//                 return response.json();
//             })
//             .then((posts) => {
//                 setPosts(posts);
//             })
//             .catch((err) => {
//                 setError(err.message); // Armazena a mensagem de erro no estado de erro
//             });
//     }, []);

//     return (
//         <>
//             {error ? (
//                 <p>Erro nesse cabare: {error}</p>
//             ) : (
//                 <>
//                     {posts.length > 0 &&
//                         posts.map((post) => <Post key={post.id} {...post} />)}
//                 </>
//             )}
//         </>
//     );
// }


