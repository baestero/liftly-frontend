import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import useForm from "../../Hooks/useForm";
import { EXERCISE_POST } from "../../api";
import { useParams } from "react-router-dom";
import Message from "../Helpers/Message";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "../Dashboard/CrudExercises.module.css";

const AddExercise = () => {
  const { categoryId, subCategoryId } = useParams();
  const { loading, message, request } = useFetch();
  const exercise = useForm();
  const sets = useForm();
  const reps = useForm();
  const maxWeight = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reps.value >= 12) {
      const confirm = window.confirm(
        "Recomendação: diminua as repetições e aumente a carga 😉"
      );

      if (!confirm) {
        return;
      }
    }

    try {
      const token = window.localStorage.getItem("token");
      const { url, options } = EXERCISE_POST(token, categoryId, subCategoryId, {
        name: exercise.value,
        sets: sets.value,
        reps: reps.value,
        maxWeight: maxWeight.value,
      });
      const { response, json } = await request(url, options);

      if (response.ok) {
        ("");
        console.log(json);
        navigate(-1, { state: { message: json.message } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animeLeft">
      <h1 className="title">Adicionar novo</h1>

      <form onSubmit={handleSubmit}>
        <Message message={message} />
        <Input
          label="exercicio"
          type="text"
          name="exercicio"
          placeholder="Nome do exercicio"
          {...exercise}
        />
        <div className={styles.inputContainer}>
          <Input
            label="sets"
            type="text"
            name="series"
            placeholder="Numero de séries"
            {...sets}
          />
          <Input
            label="reps"
            type="text"
            name="repeticoes"
            placeholder="Número do repeticoes"
            {...reps}
          />
          <Input
            label="maxWeight"
            type="text"
            name="maxWeight"
            placeholder="Peso máximo"
            {...maxWeight}
          />
        </div>
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

export default AddExercise;
