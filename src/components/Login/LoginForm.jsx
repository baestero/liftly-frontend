import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST } from "../../api";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const [message, setMessage] = React.useState("");

  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message);
        } else {
          alert("Usuario autenticado");
          setMessage(null);
          window.localStorage.setItem("token", data.token);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <section className="container">
      {message &&
        message.map((msg) => {
          return (
            <p className="error" key={msg}>
              {msg}
            </p>
          );
        })}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
