import React, { useState } from "react";

import api from "./../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre
        <strong> talentos</strong> para a sua empresa
      </p>

      <form onSubmit={handleSubmmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu email aqui"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
