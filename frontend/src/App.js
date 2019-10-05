import React, { useState } from "react";
import api from "./services/api";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  async function handleSubmmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    localStorage.setItem("user", _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
