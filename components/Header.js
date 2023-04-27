import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/public/icon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-blue-950 shadow-lg">
      <nav className="p-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image src={Icon} width={50} height={50} className="mr-4" alt="Icon" />
          <span className="text-xl font-semibold text-white">Tristan Jarrett</span>
        </a>
        <div className="flex sm:hidden">
          <button className="text-white text-3xl focus:outline-none" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
          </button>
        </div>
        <div className="hidden sm:flex">
          <a href="https://medium.com/@tristanjarrett" className="text-xl font-medium text-white hover:underline mr-4">
            Blog
          </a>
          <a href="/#contact" className="text-xl font-medium text-white hover:underline">
            Get in touch!
          </a>
        </div>
      </nav>
      <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <a href="https://medium.com/@tristanjarrett" className="block py-4 text-xl font-medium text-white hover:underline px-4">
          Blog
        </a>
        <a href="/#contact" className="block py-4 text-xl font-medium text-white hover:underline px-4">
          Get in touch!
        </a>
      </div>
    </header>
  );
};

export default Header;
