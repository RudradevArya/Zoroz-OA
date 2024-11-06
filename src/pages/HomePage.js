import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getProducts } from '../utils/api';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const products = await getProducts(4);
      setFeaturedProducts(products);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to MockShop</h1>
        <section className={styles.featuredProducts}>
          <h2>Featured Products</h2>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;