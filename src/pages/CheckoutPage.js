import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import styles from '../styles/CheckoutPage.module.css';
import { useAuth } from '../context/AuthContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to a backend API
    const isSuccessful = Math.random() < 0.7;
    console.log('Order submitted:', { ...formData, cart, total });
    clearCart();
    navigate(`/payment-result?status=${isSuccessful ? 'success' : 'failure'}`);
    // console.log('Order submitted:', { ...formData, cart, total });
    // clearCart();
    // navigate('/payment-result?status=success');
  };

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <h1>Checkout</h1>
          <p>Your cart is empty. Please add some items before checking out.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Checkout</h1>
        <div className={styles.checkoutContainer}>
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <span>{item.title}</span>
                <span>{item.quantity} x ${item.price}</span>
              </div>
            ))}
            <div className={styles.total}>
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.checkoutForm}>
            <h2>Shipping Information</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Shipping Address"
              required
            />
            <button type="submit">Place Order</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;