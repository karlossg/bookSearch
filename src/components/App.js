import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import type { Match } from 'react-router-dom';

import Landing from './Landing';

const FourOhFour = () => <h1>404: Page not found!</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
