import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACES_COUNT: 300,
};


ReactDOM.render(
  <React.StrictMode>
    <App placesCount={Settings.PLACES_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
