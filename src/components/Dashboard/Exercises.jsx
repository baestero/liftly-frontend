import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { EXERCISE_DELETE, EXERCISE_GET } from "../../api";
import Message from "../Helpers/Message";
import styles from "../Dashboard/Exercises.module.css";

const Exercises = () => {
  const { categoryId, subCategoryId } = useParams();
  const { data, loading, message, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (categoryId && subCategoryId) {
      const listExercises = async () => {
        const token = window.localStorage.getItem("token");
        const { url, options } = EXERCISE_GET(token, categoryId, subCategoryId);
        await request(url, options);
      };
      listExercises();
    }
  }, [categoryId, subCategoryId, request]);

  const removeExercise = async (exerciseId) => {
    if (window.confirm("Deseja realmente remover esse exercicio?"))
      try {
        const token = window.localStorage.getItem("token");
        const { url, options } = EXERCISE_DELETE(
          token,
          categoryId,
          subCategoryId,
          exerciseId
        );
        const { response } = await request(url, options);

        if (response.ok) {
          navigate(0);
        }
      } catch (err) {
        console.error(err.message);
      }
  };

  return (
    <div className="animeLeft">
      <div className={styles.exerciseHeader}>
        <h1 className="title">Exercícios</h1>
        <Link
          to={`/dashboard/categories/${categoryId}/subcategories/${subCategoryId}/exercises/add`}
        >
          <img src="/Assets/mais (2).png" alt="" />
        </Link>
      </div>

      <Message message={message} />
      {loading && <div className="loading"></div>}

      <div className={styles.exerciseContainer}>
        {data &&
          data.map((exercise) => (
            <div key={exercise._id} className={styles.exercise}>
              <div className={styles.exerciseTitle}>
                <img
                  className={styles.img}
                  src={"/Assets/haltere (1).png"}
                  alt=""
                />
                <h3>{exercise.name}</h3>
              </div>

              <div className={styles.exerciseStats}>
                <p>
                  Repetições: <span>{exercise.sets}</span>
                </p>
                <p>
                  Séries: <span>{exercise.reps}</span>
                </p>
                <p>
                  PR: <span>{exercise.maxWeight}kg</span>
                </p>
              </div>
              <div className={styles.crudIcons}>
                <Link
                  to={`/dashboard/categories/${categoryId}/subcategories/${subCategoryId}/exercises/${exercise._id}`}
                >
                  <img src="/Assets/editar-texto.png" alt="" />
                </Link>
                <img
                  onClick={() => removeExercise(exercise._id)}
                  src="/Assets/excluir.png"
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Exercises;
