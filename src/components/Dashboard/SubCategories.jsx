import React from "react";
import { useParams } from "react-router-dom";
import { SUBCATEGORY_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "../Dashboard/SubCategories.module.css";
import Message from "../Helpers/Message";
import superioresImg from "../../Assets/superiores2.png";
import inferioresImg from "../../Assets/inferiores.png";
import abdomenImg from "../../Assets/abdomen.png";
import cardioImg from "../../Assets/cardio.png";

const SubCategories = () => {
  const { id } = useParams();
  const { data, loading, message, request } = useFetch();

  const categoryIcons = {
    "68c0e4d09615344715b20eca": superioresImg,
    "68c0e4d89615344715b20ecc": inferioresImg,
    "68c0e4f59615344715b20ece": abdomenImg,
    "68c0e4fb9615344715b20ed0": cardioImg,
  };

  React.useEffect(() => {
    if (id) {
      const listarSubCategorias = async () => {
        const token = window.localStorage.getItem("token");
        const { url, options } = SUBCATEGORY_GET(token, id);
        await request(url, options);
      };
      listarSubCategorias();
    }
  }, [id, request]);

  return (
    <div className="animeLeft">
      <h1 className="title">Subcategorias</h1>

      <Message message={message} />
      {loading && <p>Carregando ...</p>}

      <div className={styles.categoriaContainer}>
        {data &&
          data.map((categoria) => (
            <div key={categoria._id} className={styles.categoria}>
              <img className={styles.img} src={categoryIcons[id]} alt="" />
              <p>{categoria.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubCategories;
