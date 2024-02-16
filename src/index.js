import React from 'react';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './store';
import App from './App';
import './style/main.css';
import { makeProductRequest } from './middlewares';
import reduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(makeProductRequest, reduxPromise))
);

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
