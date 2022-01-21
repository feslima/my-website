import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type NavbarItemProps = {
  name: string;
};
const NavBarItem: FunctionComponent<NavbarItemProps> = ({ name }) => {
  return (
    <li className="px-1 mx-1 inline-block uppercase hover:opacity-50 hover:after:content-['\_']">
      <a href="#">{name}</a>
    </li>
  );
};

const Navbar: FunctionComponent<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const items: string[] = ['Resume', 'Portfolio', 'About', 'Contact'];
  return (
    <nav className="font-bold py-2 flex flex-wrap sm:flex-no-wrap justify-center text-lg bg-fuchsia-900 text-white">
      <p className="mx-8 uppercase text-center sm:text-left self-center grow">
        Felipe Lima
      </p>
      <button className="sm:hidden px-3" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`mx-4 sm:flex justify-center items-center basis-full sm:basis-auto ${
          open ? 'flex' : 'hidden'
        }`}
      >
        <ul className="list-none flex flex-col sm:flex-row">
          {items.map((item) => (
            <NavBarItem key={item.toLowerCase()} name={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
