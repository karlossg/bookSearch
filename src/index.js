import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import baseStyles from './styles/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import BooksListContainer from './containers/BooksListContainer';

const FourOhFour = () => <h1>404: Page not found!</h1>;

const render = () => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={BooksListContainer} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};
render();
registerServiceWorker();
