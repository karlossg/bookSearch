import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import baseStyles from './styles/index';

const render = () => {
  baseStyles();
  ReactDOM.render(<App />, document.getElementById('root'));
};
render();
registerServiceWorker();
