import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./rootreducer/rootreducer.js";
import { Provider } from "react-redux";

const store = configureStore({ reducer: Rootreducer });

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
