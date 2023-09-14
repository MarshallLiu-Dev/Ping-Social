import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PingBox() {
    const [summary, setSummary] = useState(""); 
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set("summary", summary);
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
        <form onSubmit={createNewPost} className="Ping-box">
            <input
                type="summary"
                placeholder={"O que está acontecendo?"}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
            />
            <button>Criar Ping</button>
        </form>
    );
}

export default PingBox;
