import React, { FunctionComponent, ReactNode } from 'react';

type NavbarItemProps = {
  name: string;
  children?: ReactNode;
};
const NavBarItem: FunctionComponent<NavbarItemProps> = ({ name }) => {
  return (
    <li className="px-1 mx-1 inline-block uppercase hover:opacity-50 hover:after:content-['\_']">
      <a href="#">{name}</a>
    </li>
  );
};

type NavbarProps = {
  children?: ReactNode;
};
const Navbar: FunctionComponent<NavbarProps> = (props?: NavbarProps) => {
  const items: string[] = ['Resume', 'Portfolio', 'About', 'Contact'];
  return (
    <nav className="font-bold font-roboto-mono py-2 flex justify-center text-lg bg-fuchsia-900 text-white">
      <ul className="list-none">
        {items.map((item) => (
          <NavBarItem name={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
