import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This imports your App component above

// This finds the <div id="root"></div> inside your public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
