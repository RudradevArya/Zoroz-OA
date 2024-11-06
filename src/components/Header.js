import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">Rudy's Shop</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li>
              <Link to="/cart" className={styles.cartLink}>
                Cart
                {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
              </Link>
            </li>
            {user ? (
              <>
                <li><span className={styles.username}>Hello, {user.username}</span></li>
                <li><button onClick={handleLogout} className={styles.logoutBtn}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className={styles.loginBtn}>Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;