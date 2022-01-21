import React, { FunctionComponent, ReactNode } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children?: ReactNode;
};
const Layout: FunctionComponent<LayoutProps> = (props?: LayoutProps) => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Layout;
