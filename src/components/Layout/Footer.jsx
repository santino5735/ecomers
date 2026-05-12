import styles from "./Footer.module.css";

const teamMembers = [
  {
    nombre: "Santino Ramirez",
    rol: "Frontend Developer",
    github: "github.com/santino5735",
    avatar: "SR",
  },
  {
    nombre: "Santino Ramirez",
    rol: "UI/UX Designer",
    github: "github.com/santino5735",
    avatar: "SR",
  },
  {
    nombre: "Santino Ramirez",
    rol: "React Developer",
    github: "github.com/santino5735",
    avatar: "SR",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.brandName}>SANTINOSHOP</span>
          <p className={styles.brandDesc}>
            Tu tienda online de estilo urbano. Productos seleccionados con criterio.
          </p>
          <p className={styles.copy}>© 2026 SANTINOSHOP. Todos los derechos reservados.</p>
        </div>

        <div className={styles.team}>
          <h4 className={styles.teamTitle}>Equipo de Desarrollo</h4>
          <div className={styles.cards}>
            {teamMembers.map((member) => (
              <div key={member.nombre} className={styles.card}>
                <div className={styles.avatar}>{member.avatar}</div>
                <div className={styles.info}>
                  <span className={styles.name}>{member.nombre}</span>
                  <span className={styles.role}>{member.rol}</span>
                  <span className={styles.github}>{member.github}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
