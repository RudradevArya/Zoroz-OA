import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.itemInfo}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <div className={styles.quantity}>
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Remove</button>
                </li>
              ))}
            </ul>
            <div className={styles.cartSummary}>
              <p>Total: ${total.toFixed(2)}</p>
              <Link to="/checkout" className={styles.checkoutButton}>Proceed to Checkout</Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;