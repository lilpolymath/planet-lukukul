import Head from 'next/head';
import React from 'react';

const Meta = ({ title = '' }) => {
  const pageTitle = title ? title + ' | Planet Lukukl' : 'Planet Lukukul';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name='description'
        content='Escape into a new world. It’s storytelling, community and social innovation.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;

