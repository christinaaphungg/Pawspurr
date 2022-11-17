import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Styles from './stylesheets/styles.css';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(
//   // <BrowserRouter>
//   <App />
//   // </BrowserRouter>
// );

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById("app"));