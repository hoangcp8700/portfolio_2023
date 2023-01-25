import React from 'react';
import HomeContainer from '@containers/Home';
import SEO from '@components/common/SEO';

const HOME: React.FC = () => (
  <>
    <SEO
      title='Home Page'
      description='Home page Lorem'
      keyword='home home home'
      imgSrc='https://source.unsplash.com/random'
      themeColor='#f9f'
    />
    <HomeContainer />
  </>
);

export default HOME;
