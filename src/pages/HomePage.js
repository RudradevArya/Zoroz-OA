import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getProducts, getCategories } from '../utils/api';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(4);
      setFeaturedProducts(products);
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to Rudy's Shop</h1>
            <p>Discover amazing products at unbeatable prices!</p>
            <Link to="/products" className={styles.ctaButton}>Shop Now</Link>
          </div>
        </section>

        <section className={styles.featuredProducts}>
          <div className="container">
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
          </div>
        </section>

        <section className={styles.categories}>
          <div className="container">
            <h2>Shop by Category</h2>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <Link key={category} to={`/products?category=${category}`} className={styles.categoryCard}>
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className="container">
            <h2>About Rudy's Shop</h2>
            <p>Rudy's Shop is your one-stop destination for all your shopping needs. We offer a wide range of high-quality products at competitive prices, ensuring a seamless shopping experience for our valued customers.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;