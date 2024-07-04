import { FC, ReactNode } from 'react';

import Meta from './meta';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

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

