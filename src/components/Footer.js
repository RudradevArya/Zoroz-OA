import React from 'react';
// import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2024 Rudy's-Shop. All rights reserved.</p>
        <nav>
          <ul>
            
            <li><a href="https://github.com/RudradevArya/Zoroz-OA">Privacy Policy</a></li>
            <li><a href="https://github.com/RudradevArya/Zoroz-OA">Terms of Service</a></li>
            <li><a href="https://www.linkedin.com/in/rudradev-arya/">Contact Me</a></li>
            <li>Made by Rudradev Arya as Zoroz Intern Assessment</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;