import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./ItemListContainer.module.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados =
    filtro === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === filtro);

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
      <p>Cargando productos...</p>
    </div>
  );

  if (error) return (
    <div className={styles.error}>
      <p>⚠ {error}</p>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.topBar}>
        <h2 className={styles.title}>
          Catálogo <span className={styles.count}>({productosFiltrados.length})</span>
        </h2>
        <div className={styles.filters}>
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filtro === cat ? styles.active : ""}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {productosFiltrados.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
