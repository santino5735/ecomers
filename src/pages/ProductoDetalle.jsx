import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductoDetalle.module.css";

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setProducto(found || null);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(producto);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  );

  if (!producto) return (
    <div className={styles.notFound}>
      <p>Producto no encontrado.</p>
      <button onClick={() => navigate("/productos")} className={styles.backBtn}>
        ← Volver al catálogo
      </button>
    </div>
  );

  const precioFormateado = producto.precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  const stars = Math.round(producto.rating);

  return (
    <div className={styles.page}>
      <button onClick={() => navigate(-1)} className={styles.back}>
        ← Volver
      </button>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img src={producto.imagen} alt={producto.nombre} className={styles.image} />
          <span className={styles.categoria}>{producto.categoria}</span>
        </div>

        <div className={styles.info}>
          <div className={styles.rating}>
            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
            <span>{producto.rating} / 5</span>
          </div>

          <h1 className={styles.nombre}>{producto.nombre}</h1>
          <p className={styles.descripcion}>{producto.descripcion}</p>

          <div className={styles.priceRow}>
            <span className={styles.precio}>{precioFormateado}</span>
            <span className={styles.stock}>
              {producto.stock > 0
                ? `✓ ${producto.stock} disponibles`
                : "Sin stock"}
            </span>
          </div>

          <button
            className={`${styles.addBtn} ${added ? styles.addBtnSuccess : ""}`}
            onClick={handleAddToCart}
            disabled={producto.stock === 0}
          >
            {added ? "✓ Agregado al carrito" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
