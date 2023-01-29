import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface INavbarItemProps {
  name: string;
  sectionRef: string;
}
const NavBarItem: React.FC<INavbarItemProps> = ({ name, sectionRef }) => {
  return (
    <li className="px-1 mx-1 inline-block uppercase hover:opacity-50 hover:after:content-['\_'] text-feslima-purple-300">
      <a href={`#${sectionRef}`}>{name}</a>
    </li>
  );
};

interface INavbarProps {
  sticky?: boolean;
}

const Navbar: React.FC<INavbarProps> = ({ sticky = false }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const items: string[] = ['Resume', 'Portfolio'];
  const stickyClass = sticky ? 'sticky top-0 z-10' : '';
  return (
    <div
      className={`${stickyClass} bg-feslima-600 text-lg text-white font-bold`}
    >
      <nav className="max-w-screen-lg mx-auto py-2 flex flex-wrap sm:flex-no-wrap justify-center">
        <div className="mx-8 flex space-x-8 grow">
          <p className="uppercase text-center sm:text-left self-center text-feslima-purple-300">
            Felipe Lima
          </p>
        </div>
        <button className="sm:hidden px-3" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={['fas', 'bars']} />
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
