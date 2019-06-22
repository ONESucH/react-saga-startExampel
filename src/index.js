import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import history from './local-history';
import { getStore } from './store';
import * as serviceWorker from './serviceWorker';
import routers from './routers';

const store = getStore();

render(
  <Provider store={store}>
    <Router history={history}>{routers}</Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();