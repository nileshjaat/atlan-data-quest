import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { Toaster } from 'react-hot-toast';

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
  middleware: [thunk],
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{ className: 'react-hot-toast' }}
      />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
