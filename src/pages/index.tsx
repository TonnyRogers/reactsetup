import React from 'react';
import Head from 'next/head';

import tonyImage from '../assets/open-peeps.png'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Next App</title>
    </Head>

      <h1>Hello Tony</h1>
      <img src={tonyImage} alt="Tony Man"/>
      <p>Oi eu sou Tony Amaral</p>
  </Container>
);

export default Home;
