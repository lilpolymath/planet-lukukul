import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Sigmar_One } from '@next/font/google';

import { cx } from '@/utils/misc';

const sigmarOne = Sigmar_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-sigmar-one',
});

const basicSans = localFont({
  src: [
    {
      path: '../assets/fonts/basicsanssf.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(basicSans.className, sigmarOne.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
