import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Nueva colección 2026</span>
          <h1 className={styles.heroTitle}>
            tu gusto <br />
            <span className={styles.heroAccent}>te define.</span>
          </h1>
          <p className={styles.heroDesc}>
            Descubrí nuestra selección de productos urbanos de alta calidad.
            Diseñados para los que se animan a ser ellos mismos.
          </p>
          <Link to="/productos" className={styles.cta}>
            Explora nuestro catálogo
          </Link>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.circle} />
          <div className={styles.heroImg}>
            <img
              src="/imagenes/ropa.jpg"
              alt="Hero"
            />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        {[
          { title: "Envío rápido", desc: "Entrega en 24-48hs a todo el país" },
          { title: "Calidad premium", desc: "Productos seleccionados con criterio" },
          { title: "Devolución", desc: "30 días para cambios " },
        ].map((f) => (
          <div key={f.title} className={styles.feature}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <strong className={styles.featureTitle}>{f.title}</strong>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
