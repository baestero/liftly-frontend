import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        alert("Usuario autenticado");
        console.log(data.token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="container">
      {error &&
        error.map((err) => {
          return <p key={err}>{err}</p>;
        })}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
