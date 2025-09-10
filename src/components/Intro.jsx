import React from "react";
import styles from "./Login/Login.module.css";
import stylesBtn from "./Forms/Button.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className={`${styles.forms} animeLeft`}>
        <h1 className="title">LiftLy</h1>
        <p className="descricao">Mais peso, mais séries, mais evolução.</p>
        <Link to={"/login"} className={stylesBtn.button}>
          Começar
        </Link>
      </div>
    </section>
  );
};

export default Home;
