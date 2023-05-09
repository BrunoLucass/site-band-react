import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from "@reduxjs/toolkit"; //npm install --save @reduxjs/toolkit
import Rootreducer from "./rootreducer/rootreducer.js";
import { Provider } from "react-redux"; //npm install --save react-redux

const store = configureStore({ reducer: Rootreducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
