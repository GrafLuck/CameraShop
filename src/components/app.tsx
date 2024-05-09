import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../app-route';
import { CatalogPage } from '../pages/catalog-page';
import { ProductPage } from '../pages/product-page';
import LoadingScreen from '../pages/loading-screen/loading-screen';

import { useAppSelector } from '../hooks/use-app-selector';
import { getIsProductDataLoading } from '../store/products-data/products-data.selectors';

function App(): React.JSX.Element {
  const IsProductDataLoadingStatus = useAppSelector(getIsProductDataLoading);

  if (IsProductDataLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={AppRoute.Product} element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
