import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Algo from './Algo';

// 1. Localiza o elemento 'root' no HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Renderiza a aplicação dentro desse elemento
root.render(
  <React.StrictMode>
    <App />
    <Algo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
