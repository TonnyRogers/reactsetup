import React from 'react';
import Head from 'next/head';

import tonyImage from '../assets/open-peeps.png'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Next App</title>
    </Head>

    <main>
      <h1>Hello Tony</h1>
      <img src={tonyImage} alt="Tony Man"/>
    </main>
  </div>
);

export default Home;
