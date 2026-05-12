import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Carrito.module.css";

function Carrito() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  const precioFormateado = (val) =>
    val.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>🛒</span>
        <h2>Tu carrito está vacío</h2>
        <p>Explorá nuestro catálogo y agregá productos.</p>
        <Link to="/productos" className={styles.ctaEmpty}>Ver productos</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Carrito <span>({totalItems} items)</span></h1>
        <button onClick={clearCart} className={styles.clearBtn}>Vaciar carrito</button>
      </div>

      <div className={styles.layout}>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.imagen} alt={item.nombre} className={styles.itemImg} />
              <div className={styles.itemInfo}>
                <span className={styles.itemCat}>{item.categoria}</span>
                <h3 className={styles.itemName}>{item.nombre}</h3>
                <span className={styles.itemPrice}>{precioFormateado(item.precio)}</span>
              </div>
              <div className={styles.itemControls}>
                <div className={styles.qty}>
                  <button onClick={() => updateQuantity(item.id, item.cantidad - 1)}>−</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => updateQuantity(item.id, item.cantidad + 1)}>+</button>
                </div>
                <span className={styles.subtotal}>{precioFormateado(item.precio * item.cantidad)}</span>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>✕</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Resumen</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal ({totalItems} items)</span>
            <span>{precioFormateado(totalPrice)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Envío</span>
            <span className={styles.free}>Gratis</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>{precioFormateado(totalPrice)}</span>
          </div>
          <button className={styles.checkoutBtn}>Finalizar compra</button>
          <Link to="/productos" className={styles.keepShopping}>← Seguir comprando</Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
