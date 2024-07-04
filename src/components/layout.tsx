import { FC, ReactNode } from 'react';

import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Meta from './meta';

const Layout: FC<{ children: ReactNode; title: string }> = ({
  children,
  title = '',
}) => {
  return (
    <>
      <Meta title={title} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

