import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Rudy's-Shop</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">Cart ({itemCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;