import React from 'react';
import ReactDOM from 'react-dom';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import init from './init';
import reducers from './reducers';

// create app's state storage
const store = createStore(
  reducers,
  init,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware,
  ),
);

document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.querySelector('#app');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
});
