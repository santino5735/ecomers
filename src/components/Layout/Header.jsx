import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>THE </span>
          <span className={styles.logoText}>SANTINO STORE<span className={styles.logoAccent}> SHOP</span></span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Inicio</Link>
          <Link to="/productos" className={styles.navLink}>Productos</Link>
        </nav>

        <Link to="/carrito" className={styles.cartLink}>
          <CartWidget />
        </Link>
      </div>
    </header>
  );
}

export default Header;
