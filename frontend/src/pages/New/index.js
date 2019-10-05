import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";
import "./styles.css";
// import { Container } from './styles';
import api from "./../../services/api";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={thumbnail ? "has-thumbnail" : ""}
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA</label>
      <input
        id="company"
        value={company}
        placeholder="Sua empresa"
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="company">
        TECNOLOGIAS *<span>(separadas por virgulas)</span>
      </label>
      <input
        id="techs"
        value={techs}
        placeholder="Quais tecnologias usam?"
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="company">
        PREÇO DA DIARIA *<span>(em branco para GRATIS)</span>
      </label>
      <input
        id="price"
        value={price}
        placeholder="Preço por dia?"
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}
