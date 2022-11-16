import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App/>);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
