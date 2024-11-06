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
      <div className={styles.logo}>
        <Link to="/">Rudy's-Shop</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">Cart ({itemCount})</Link>
          </li>
          {user ? (
            <>
              <li>Welcome, {user.username}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;