import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

import { cx } from '@/utils/misc';

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
    <div className={cx(basicSans.className)}>
      <Component {...pageProps} />
    </div>
  );
}

