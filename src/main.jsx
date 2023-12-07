import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import './index.css'
// import './alt.css'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
