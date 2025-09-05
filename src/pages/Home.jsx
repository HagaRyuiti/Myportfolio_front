import React from 'react';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to the Home Page!</h2>
      <p style={styles.paragraph}>You are logged in.</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e0f7fa',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    color: '#00796b',
    marginBottom: '15px',
  },
  paragraph: {
    color: '#333',
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
