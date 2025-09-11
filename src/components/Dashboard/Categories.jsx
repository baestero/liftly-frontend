import React from "react";
import styles from "../Dashboard/SubCategories.module.css";
import { CATEGORY_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Message from "../Helpers/Message";
import { Link } from "react-router-dom";
import superioresImg from "../../Assets/superiores2.png";
import inferioresImg from "../../Assets/inferiores.png";
import abdomenImg from "../../Assets/abdomen.png";
import cardioImg from "../../Assets/cardio.png";

const categoryIcons = {
  "68c0e4d09615344715b20eca": superioresImg,
  "68c0e4d89615344715b20ecc": inferioresImg,
  "68c0e4f59615344715b20ece": abdomenImg,
  "68c0e4fb9615344715b20ed0": cardioImg,
};

const Categories = () => {
  const { data, loading, message, request } = useFetch();

  React.useEffect(() => {
    const listarCategorias = async () => {
      const token = window.localStorage.getItem("token");
      const { url, options } = CATEGORY_GET(token);
      await request(url, options);
    };

    listarCategorias();
  }, [request]);

  return (
    <div>
      <h1 className="title">Categorias</h1>

      <Message message={message} />
      {loading && <p>Carregando ...</p>}

      <div className={styles.categoriaContainer}>
        {data &&
          data.map((categoria) => (
            <Link key={categoria._id} to={`${categoria._id}`}>
              <div className={styles.categoria}>
                <img
                  className={styles.img}
                  src={categoryIcons[categoria._id]}
                  alt=""
                />
                <p>{categoria.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
