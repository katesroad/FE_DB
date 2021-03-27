import * as React from 'react';
import UseCaseList from 'components/UseCases';
import Head from 'next/head';

export default function IndexScreen() {
  return (
    <>
      <Head>
        <title>Pay API</title>
      </Head>
      <UseCaseList />
    </>
  );
}
