import React from "react";
import styles from "./Home.module.css";
import stylesBtn from "./Forms/Button.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.forms}>
        <h1>LiftLy</h1>
        <p>Mais peso, mais séries, mais evolução.</p>
        <Link to={'/login'} className={stylesBtn.button}>Começar</Link>
      </div>
    </section>
  );
};

export default Home;
