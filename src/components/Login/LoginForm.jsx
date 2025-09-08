import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Message from "../Helpers/Message";

const LoginForm = () => {
  const { userLogin, loading, message } = React.useContext(UserContext);

  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Message message={message} />
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <div className={styles.buttonContainer}>
            <Button>Entrar</Button>
            <Link className={stylesBtn.button} to={"/login/criar"}>
              Cadastro
            </Link>
          </div>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
