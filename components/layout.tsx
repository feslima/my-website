import React from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-feslima-50 min-h-screen">
      <Navbar sticky={true} />
      <div className="max-w-screen-lg mx-auto">{children}</div>
    </div>
  );
};

type BlogLayoutProps = {
  children?: React.ReactNode;
};
export const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="bg-feslima-50 min-h-screen">
      <Navbar sticky={true} />
      <div className="max-w-[90ch] pr-4 pl-12 py-4 leading-[1.75] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
