import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
    </Provider>
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
