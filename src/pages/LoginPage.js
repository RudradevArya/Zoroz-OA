import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('johnd');
  const [password, setPassword] = useState('m38rmF$');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Login</h1>
        <div className={styles.notice}>
          <p>This is a dummy login page. Which uses default credentials of the fake-store API that i am using here</p>
          <p>Please Use the following credentials(Already Prefilled):</p>
          <p>Username: johnd</p>
          <p>Password: m38rmF$</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </main>
    </div>
  );
};

export default LoginPage;