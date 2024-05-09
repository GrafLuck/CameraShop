import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/stores';
import { getProductsAction } from './store/actions/api-actions';
import App from './components/app';
import { Provider } from 'react-redux';

store.dispatch(getProductsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
