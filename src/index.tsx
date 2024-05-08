import React from 'react';
import ReactDOM from 'react-dom/client';
import { CatalogPage } from './pages/catalog-page';
import { ProductPage } from './pages/product-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <CatalogPage /> */}
    <ProductPage />
  </React.StrictMode>
);
