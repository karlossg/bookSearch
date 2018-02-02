import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Landing from './Landing';

const FourOhFour = () => <h1>404: Page not found!</h1>;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
