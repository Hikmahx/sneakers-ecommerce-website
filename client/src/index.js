import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
