import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface INavbarItemProps {
  name: string;
  sectionRef: string;
}
const NavBarItem: FunctionComponent<INavbarItemProps> = ({
  name,
  sectionRef,
}) => {
  return (
    <li className="px-1 mx-1 inline-block uppercase hover:opacity-50 hover:after:content-['\_']">
      <a href={`#${sectionRef}`}>{name}</a>
    </li>
  );
};

interface INavbarProps {
  sticky?: boolean;
}

const Navbar: FunctionComponent<INavbarProps> = ({ sticky = false }) => {
  const [open, setOpen] = useState<boolean>(false);
  const items: string[] = ['Resume', 'Portfolio'];
  const stickyClass = sticky ? 'sticky top-0 z-10' : '';
  return (
    <div
      className={`${stickyClass} bg-fuchsia-900 text-lg text-white font-bold`}
    >
      <nav className="max-w-screen-lg mx-auto py-2 flex flex-wrap sm:flex-no-wrap justify-center">
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
              <NavBarItem
                key={item.toLowerCase()}
                name={item}
                sectionRef={item.toLowerCase()}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
