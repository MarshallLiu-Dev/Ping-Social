// import ReactQuill from "react-quill";

// export default function Editor({value,onChange}) {
//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [
//         { list: 'ordered' },
//         { list: 'bullet' },
//         { indent: '-1' },
//         { indent: '+1' },
//       ],
//       ['link', 'image'],
//       ['clean'],
//     ],
//   };
//   return (
//     <div className="content">
//     <ReactQuill
//       value={value}
//       theme={'snow'}
//       onChange={onChange}
//       modules={modules} />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditPost() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [summary, setSummary] = useState("");
    const [files, setFiles] = useState("");

    useEffect(() => {
        // Faça uma solicitação para buscar os detalhes da postagem com base no postId
        async function fetchPostDetails() {
            try {
                const response = await fetch(`http://localhost:5000/edit-post/${postId}`, {
                    credentials: "include",
                });

                if (response.ok) {
                    const postData = await response.json();
                    setPost(postData);
                    setSummary(postData.summary);
                    // Preencha outros campos de edição, se necessário
                } else {
                    // Lida com erros de busca de postagem
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchPostDetails();
    }, [postId]);

    const handleEditPost = async (ev) => {
        ev.preventDefault();
        // Faça uma solicitação para atualizar a postagem com base nos campos editados
        // Lida com a resposta da atualização da postagem
    };

    return (
        <form onSubmit={handleEditPost} className="form login">
            <input
                type="summary"
                placeholder={"Edit the summary"}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
            />
            {/* Outros campos de edição, se necessário */}
            <button>Save Changes</button>
        </form>
    );
}
