import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { Poppins } from '@next/font/google';

import { cx } from '@/utils/misc';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
});

const kcNeueTeeth = localFont({
  src: '../assets/fonts/KCNeueTeeth.otf',
  display: 'swap',
  variable: '--font-kc-neue-teeth',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cx(poppins.className, poppins.variable, kcNeueTeeth.variable)}
    >
      <Component {...pageProps} />
    </div>
  );
}

