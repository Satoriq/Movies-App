import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'ie-array-find-polyfill';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import rootReducer from './Store/reducers/rootReducer';
import './index.css';
import App from './App';


// kick off the polyfill!


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__
    //   && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
