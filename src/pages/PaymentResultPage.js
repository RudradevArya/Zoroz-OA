import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/PaymentResultPage.module.css';

const PaymentResultPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get('status');

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Payment {status === 'success' ? 'Successful' : 'Failed'}</h1>
        {status === 'success' ? (
          <p>Thank you for your purchase! Your order has been placed successfully.</p>
        ) : (
          <p>We're sorry, but there was an issue processing your payment. Please try again.</p>
        )}
        <Link to="/" className={styles.homeLink}>Return to Home</Link>
      </main>
    </div>
  );
};

export default PaymentResultPage;