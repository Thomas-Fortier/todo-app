import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App/App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);