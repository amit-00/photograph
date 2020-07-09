import React from 'react';
import Layout from '../components/layout/Layout';
import Images from '../components/images/Images';

import { Helmet } from 'react-helmet';

const index = () => {
  let unsplashClientKey;

  if(process.env.NODE_ENV != 'production'){
    unsplashClientKey = process.env.GATSBY_PORTFOLIO_ACCESS_KEY;
  }
  else{
    unsplashClientKey = process.env.PORTFOLIO_ACCESS_KEY;
  }

  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous" />
      </Helmet>
      <div className="page">
        <Images key={unsplashClientKey} />
      </div>
    </Layout>
  )
}

export default index

