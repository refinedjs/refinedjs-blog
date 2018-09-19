/*eslint-disable import/first*/
import './util/ie-polyfills';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import throttle from 'lodash/throttle';

import getStore from './store';
import App from './App';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = getStore(persistedState);

store.subscribe(throttle(() => {
  saveState(store.getState());
  //May not want to save the full state here
  /*saveState({
    auth: store.getState().auth,
    ...
  })*/
}, 1000));

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
