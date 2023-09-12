/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import ".././App.css";

export default function CreatePost() {
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);


  async function createNewPost(ev) {
    const data = new FormData();
    data.set("summary", summary);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/create-post", {
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
      <button>Criar Ping</button>
    </form>
  );
}
