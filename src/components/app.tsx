import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../app-route';
import { CatalogPage } from '../pages/catalog-page';
import { ProductPage } from '../pages/product-page';
import LoadingScreen from '../pages/loading-screen/loading-screen';

import { useAppSelector } from '../hooks/use-app-selector';
import { getisProductsDataLoading } from '../store/products-data/products-data.selectors';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App(): React.JSX.Element {
  const isProductsDataLoadingStatus = useAppSelector(getisProductsDataLoading);

  if (isProductsDataLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={`${AppRoute.Product}/:id`} element={<ProductPage />} />
          <Route path={AppRoute.Error} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
