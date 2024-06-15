import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Aclonica, Inter } from '@next/font/google';
import { cx } from '@/utils/misc';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const aclonica = Aclonica({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-aclonica',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(inter.className, aclonica.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
