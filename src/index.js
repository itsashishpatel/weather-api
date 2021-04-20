import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clouds from './assets/Clouds.mp4'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <video autoPlay muted loop id="myVideo">
                            <source src={Clouds} type="video/mp4"></source>
                            Your browser does not support HTML5 video.
    </video>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
