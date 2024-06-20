import { FC, ReactNode } from 'react';

import Nav from '@/components/nav';
import Footer from '@/components/footer';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

