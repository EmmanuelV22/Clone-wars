import React from 'react';
// import {createRoot} from 'react-dom/client'
import "./styles/index.css"
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./js/layout.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// //
// const root = createRoot(document.querySelector("#app"))

// //render your react application
// root.render(<Layout/>)

