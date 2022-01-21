import React, { FunctionComponent, ReactNode } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children?: ReactNode;
};
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
