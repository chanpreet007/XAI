import * as React from 'react';
import AppAppBar from '@/components/AppAppBar/AppAppBar';
import ProductHero from '@/components/ProductHero/ProductHero';
import ProductValues from '@/components/ProductValues/ProductValues';
import ProductHowItWorks from '@/components/ProductHowItWorks/ProductHowItWorks';
import AppFooter from '@/components/AppFooter/AppFooter';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';
// import withRoot from './modules/withRoot';

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <AppFooter />
      {/* <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter /> */}
    </React.Fragment>
  );
}

export default Home;