import { createStore/*, applyMiddleware*/ } from 'redux';
//import { createLogger } from 'redux-logger';

import getRootReducer from './reducers';

//const loggerMiddleWare = createLogger({ predicate: (getState, action) => __DEV__ });

export default function getStore(persistedState) {
  //const store = createStore(getRootReducer(), undefined, applyMiddleware(loggerMiddleWare));
  const routeReducer = getRootReducer();
  const store = createStore(routeReducer, persistedState);

  return store;
}