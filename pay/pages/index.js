import * as React from 'react';
import UseCaseList from 'components/UseCases';
import Head from 'next/head';
import OurClients from 'components/OurClients';

export default function IndexScreen() {
  return (
    <>
      <Head>
        <title>Pay API</title>
      </Head>
      <OurClients />
      <UseCaseList />
    </>
  );
}
