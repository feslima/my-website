import React, { FunctionComponent, ReactNode } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children?: ReactNode;
};
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-feslima-50 min-h-screen">
      <Navbar sticky={true} />
      <div className="max-w-screen-lg mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
