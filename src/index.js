import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import Fruits from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <> <div><h1 id='titlee'>Fruits</h1></div>
    <hr></hr>
    <div id="products" class="main"><Fruits /></div>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
