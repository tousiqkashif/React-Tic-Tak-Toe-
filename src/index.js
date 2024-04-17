import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './game-logo.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <header>
      <img src={logo} alt='logo' />
      <h1>Tic-Tac-Toe</h1>
    </header>
    <App />
  </>
);

