import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/bolt.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { dataUser, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to={"/"} aria-label="Dogs - Home">
          <Logo />
        </Link>
        {dataUser ? (
          <Link className={styles.login} to={"/conta"}>
            {dataUser.username}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            {dataUser && dataUser.email}
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
