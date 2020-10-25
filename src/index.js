import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/materialize-css/dist/css/materialize.min.css"
import "../node_modules/materialize-css/dist/js/materialize.min.js"
import fakedata from './fakedata'


if(localStorage.getItem('eventsData')=== null){
  localStorage.setItem('eventsData', JSON.stringify(fakedata))
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





