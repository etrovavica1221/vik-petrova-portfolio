import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { env } from './config';

ReactDOM.render(
  <React.StrictMode>
    <App env={env}/>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();