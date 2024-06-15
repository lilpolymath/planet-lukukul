/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Planet Lukukul</title>
        <meta
          name='description'
          content='Escape into a new world. It’s storytelling, community and social innovation.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Hero />
      <Footer />
    </>
  );
}
