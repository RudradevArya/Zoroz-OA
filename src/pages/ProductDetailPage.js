import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getProduct } from '../utils/api';
import styles from '../styles/ProductDetailPage.module.css';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(id);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.productDetail}>
          <img src={product.image} alt={product.title} />
          <div className={styles.productInfo}>
            <h1>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}>Category: {product.category}</p>
            <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;