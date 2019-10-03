import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre
          <strong> talentos</strong> para a sua empresa
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu email aqui" />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
