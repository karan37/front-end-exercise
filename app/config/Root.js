import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Users from '../components/Users';
import Albums from '../components/Albums';
import Photos from '../components/Photos';

import configureStore from './store';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/:userId" component={Albums} exact />
          <Route path="/:userId/:albumId" component={Photos} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

