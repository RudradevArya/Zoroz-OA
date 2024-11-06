import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MockShop</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/checkout">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;