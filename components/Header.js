import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/public/icon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import appData from '@/data/apps.json';

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
          <div className="relative group mr-4">
            <button
              className="text-xl font-medium text-white hover:underline focus:outline-none"
              onClick={handleMenuClick}
            >
              Apps
            </button>
            {showMenu && (
              <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-4 z-50 overflow-hidden dark:bg-gray-800">
                {appData.map(app => (
                  <li key={app.id} className="">
                    <Link href={`/apps/${app.id}`} className="block text-lg py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-900">
                      {app.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href="https://medium.com/@tristanjarrett" className="text-xl font-medium text-white hover:underline mr-4">
            Blog
          </a>
          <a href="/#contact" className="text-xl font-medium text-white hover:underline">
            Get in touch!
          </a>
        </div>
      </nav>
      <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="py-4 px-4">
          <h3 className="text-lg font-medium text-white">Apps</h3>
          <ul className="mt-2">
            {appData.map(app => (
              <li key={app.id} className="py-1">
                <Link href={`/apps/${app.id}`} className="text-white hover:underline">
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
