import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import useForm from "../../Hooks/useForm";
import { EXERCISE_EDIT } from "../../api";
import { useParams } from "react-router-dom";
import Message from "../Helpers/Message";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const EditExercise = () => {
  const { categoryId, subCategoryId, exerciseId } = useParams();
  const { loading, message, request } = useFetch();
  const exercise = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(exercise.value);
    try {
      const token = window.localStorage.getItem("token");
      const { url, options } = EXERCISE_EDIT(
        token,
        categoryId,
        subCategoryId,
        exerciseId,
        {
          name: exercise.value,
        }
      );
      const { response } = await request(url, options);

      if (response.ok) {
        alert("Exercício editado com sucesso!");
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animeLeft">
      <h1 className="title">Editar exercício</h1>

      <form onSubmit={handleSubmit}>
        <Message message={message} />
        <Input
          label="exercicio"
          type="text"
          name="exercicio"
          placeholder="Nome do exercicio"
          {...exercise}
        />
        {loading ? (
          <Button className={stylesBtn.button} disabled>
            Adicionar
          </Button>
        ) : (
          <Button className={stylesBtn.button}>Adicionar</Button>
        )}
      </form>
    </div>
  );
};

export default EditExercise;
