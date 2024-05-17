import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/core/styles/css/index.css';
import App from './App';
import rootReducer from '../src/core/store/rootReducer';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';

// Sử dụng configureStore thay cho createStore
const reduxStore = configureStore({ reducer: rootReducer, });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals();
