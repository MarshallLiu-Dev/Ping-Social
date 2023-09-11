// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";


// import ".././App.css";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [selectedGif, setSelectedGif] = useState(null); // Estado para armazenar o GIF selecionado

//   async function createNewPost(ev) {
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("file", files[0]);
//     data.set("gif", selectedGif); // Adicione o GIF selecionado aos dados do formulário
//     ev.preventDefault();
//     const response = await fetch("http://localhost:5000/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });
//     if (response.ok) {
//       setRedirect(true);
//     }
//   }

//   if (redirect) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <form onSubmit={createNewPost} className="form login">
//       <input
//         type="summary"
//         placeholder={"O que está acontecendo?"}
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
//       <button>Criar Ping</button>
//     </form>
//   );
// }

// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

// import ".././App.css";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [selectedGif, setSelectedGif] = useState(null); // Estado para armazenar o GIF selecionado

//   async function createNewPost(ev) {
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("file", files[0]);
//     data.set("gif", selectedGif); // Adicione o GIF selecionado aos dados do formulário
//     ev.preventDefault();
//     const response = await fetch("http://localhost:5000/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });
//     if (response.ok) {
//       setRedirect(true);
//     }
//   }

//   if (redirect) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <form onSubmit={createNewPost} className="form login">
//       <input
//         type="summary"
//         placeholder={"O que está acontecendo?"}
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
//       <input
//         type="file"
//         id="gif"
//         placeholder="Selecione um GIF"
//         onChange={(ev) => setSelectedGif(ev.target.files[0])}
//       />
//       <button>Criar Ping</button>
//     </form>
//   );
// }


import React, { useState } from "react";
import { Navigate } from "react-router-dom";


import ".././App.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null); // Estado para armazenar o GIF selecionado

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    data.set("gif", selectedGif); // Adicione o GIF selecionado aos dados do formulário
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost} className="form login">
      <input
        type="summary"
        placeholder={"O que está acontecendo?"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <input
        type="text"
        placeholder="URL do GIF"
        value={selectedGif}
        onChange={(ev) => setSelectedGif(ev.target.value)}
      />
      <button>Criar Ping</button>
    </form>
  );
}