import { createStore, applyMiddleware, compose } from 'redux';
import history from './local-history';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import thunkMiddleware from 'redux-thunk';
import createDebounce from 'redux-debounced';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import models from './models/index';
import { assign } from 'lodash/object';

const __initialState = window.__initialState || {};

const initialState = {
  ...__initialState
};

for (let index = 0; index < models.length; index++) {
  const model = models[index];
  if (model.state) {
    assign(initialState, { [model.namespace]: model.state });
  }
}

let store = undefined;

export function getStore() {
  if (store) {
    window.store = store;
    return store;
  }

  const loggerMiddleware = createLogger({
    collapsed: process.env.NODE_ENV === 'production'
  });

  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [
    createDebounce(),
    thunkMiddleware,
    loggerMiddleware,
    sagaMiddleware
  ];

  if (process.env.NODE_ENV === 'development') {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...enhancers),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...enhancers))
    );
  }

  sagaMiddleware.run(sagas);

  for (let index = 0; index < models.length; index++) {
    const model = models[index];
    for (const key in model.subscriptions) {
      const sub = model.subscriptions[key];
      sub({
        dispatch: store.dispatch,
        history
      });
    }
  }

  return store;
}