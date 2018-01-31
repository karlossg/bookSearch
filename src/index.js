import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';
import registerServiceWorker from './utils/registerServiceWorker';
import baseStyles from './styles/index';

const render = () => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root')
  );
};
render();
registerServiceWorker();
