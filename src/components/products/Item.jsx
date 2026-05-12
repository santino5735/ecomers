import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ id, nombre, precio, imagen, categoria, rating }) {
  const precioFormateado = precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  const stars = Math.round(rating);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imagen} alt={nombre} className={styles.image} loading="lazy" />
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.rating}>
          {"★".repeat(stars)}{"☆".repeat(5 - stars)}
          <span className={styles.ratingNum}>{rating}</span>
        </div>
        <h3 className={styles.nombre}>{nombre}</h3>
        <div className={styles.footer}>
          <span className={styles.precio}>{precioFormateado}</span>
          <Link to={`/producto/${id}`} className={styles.btn}>
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
