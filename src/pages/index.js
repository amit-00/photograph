import React from 'react';
import Layout from '../components/layout/Layout';
import Images from '../components/images/Images';

import { Helmet } from 'react-helmet';

const index = () => {
  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous" />
      </Helmet>
      <div className="page">
        <Images key={process.env.GATSBY_PORTFOLIO_ACCESS_KEY} />
      </div>
    </Layout>
  )
}

export default index

