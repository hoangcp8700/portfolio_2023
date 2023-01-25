import React, { Suspense } from 'react';
import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Outlet, Routes } from 'react-router-dom';
import CONSTANTS from '@utils/constants';
import RedirectError from '@routes/RedirectError';
import Loading from '@components/atoms/Loading';
import LayoutProvider from '@context/LayoutProvider';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
// import { store } from "store";
// import AuthenticateProvider from "context/AuthenticateContext";

// ------------------------------------------

const Layout = React.lazy(() => import('@components/common/Layout'));
// const ProductDetailPage = React.lazy(() => import('pages/ProductDetail'));
const HomePage = React.lazy(() => import('@pages/'));
const PageNavigation = React.lazy(() => import('@routes/PageNavigation'));

const App = () => (
  <Suspense fallback={<Loading fullScreen />}>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {CONSTANTS.LANGUAGE_LIST?.map((ele, index) => {
          const prefix = ele.toLowerCase();
          return (
            // VI: /gio-hang
            // EN: /en/carts
            <Route key={`route-${index.toString()}`} path={prefix === 'vi' ? '' : prefix}>
              <Route index element={<HomePage />} />
              <Route path=':slug' element={<PageNavigation />} />
              {/* // page detail */}
              {/* <Route path={`${CONSTANT_ROUTE[ele].PRODUCT_DETAIL}/:slug`} element={<ProductDetailPage />} />
              <Route path={`${CONSTANT_ROUTE[ele].NEWS_DETAIL}/:slug`} element={<NewsDetailPage />} /> */}
            </Route>
          );
        })}

        <Route path='*' element={<RedirectError />} />
      </Route>
    </Routes>
  </Suspense>
);

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <HelmetProvider>
      <LayoutProvider>
        <App />
      </LayoutProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default AppWrapper;
