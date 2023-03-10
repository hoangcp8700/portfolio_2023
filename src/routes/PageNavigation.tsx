import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '@pages/error';
import Loading from '@components/atoms/Loading';
import { useLayoutContext } from '@context/LayoutProvider';

import TEMPLATE_PAGE, { TemplateRouteProps } from './paths';
import PublicRoute, { PrivateRoute } from './hook';

const PageNavigation: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isLayout, handleToggleLayout } = useLayoutContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<TemplateRouteProps>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      const page = TEMPLATE_PAGE.find((ele) => ele.paths.includes(slug));
      if (page) {
        setPageData(page);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    }
    return () => {
      setPageData(undefined);
      setIsError(false);
      setIsLoading(true);
    };
  }, [slug, handleToggleLayout]);

  useEffect(() => {
    if (pageData) {
      console.log('rrr', pageData);
      if (pageData.hiddenLayout) {
        handleToggleLayout(false);
      }
      if (!pageData.hiddenLayout && !isLayout) {
        handleToggleLayout(true);
      }
    }
  }, [pageData, isLayout, handleToggleLayout]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (isError || !pageData) {
    return <Error statusCode={404} title='Page Not Found' />;
  }

  // NOTE: PUBLIC AND PRIVATE ROUTE
  if (pageData.private) {
    return <PrivateRoute {...pageData} />;
  }
  return <PublicRoute {...pageData} />;
};

export default PageNavigation;
