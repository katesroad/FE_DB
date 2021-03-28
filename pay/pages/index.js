import * as React from 'react';
import UseCaseList from 'components/UseCases';
import Head from 'next/head';
import OurClients from 'components/OurClients';
import StartBuilding from 'components/StartBuilding';
import Features from 'components/Features';

export default function IndexScreen() {
  return (
    <>
      <Head>
        <title>Pay API</title>
      </Head>
      <StartBuilding />
      <OurClients />
      <Features />
      <UseCaseList />
    </>
  );
}
