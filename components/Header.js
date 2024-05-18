import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/public/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import appData from '@/data/apps.json';

const Header = () => {
  const [showAppsMenu, setShowAppsMenu] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleAppsMenuClick = () => {
    setShowAppsMenu(!showAppsMenu);
    setShowToolsMenu(false);
    setShowMobileMenu(false);
  };

  const handleToolsMenuClick = () => {
    setShowToolsMenu(!showToolsMenu);
    setShowAppsMenu(false);
    setShowMobileMenu(false);
  };

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowAppsMenu(false);
    setShowToolsMenu(false);
  };

  return (
    <header className="bg-blue-950 shadow-lg">
      <nav className="p-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image src={Icon} width={50} height={50} className="mr-4" alt="Icon" />
          {/* <span className="text-xl font-semibold text-white">Tristan Jarrett</span> */}
        </a>
        <div className="flex sm:hidden">
          <button className="text-white text-3xl focus:outline-none" onClick={handleMobileMenuClick}>
            <FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} />
          </button>
        </div>
        <div className="hidden sm:flex">
          <div className="relative group mr-4">
            <button
              className="text-xl font-medium text-white hover:underline focus:outline-none"
              onClick={handleAppsMenuClick}
            >
              Apps
            </button>
            {showAppsMenu && (
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
          <div className="relative group mr-4">
            <button
              className="text-xl font-medium text-white hover:underline focus:outline-none"
              onClick={handleToolsMenuClick}
            >
              Tools
            </button>
            {showToolsMenu && (
              <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-4 z-50 overflow-hidden dark:bg-gray-800">
                <li>
                  <Link href="/tools/dvla" className="block text-lg py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-900">
                    DVLA Lookup
                  </Link>
                </li>
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
      <div className={`sm:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
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
        <div className="py-4 px-4">
          <h3 className="text-lg font-medium text-white">Tools</h3>
          <ul className="mt-2">
            <li className="py-1">
              <Link href="/tools/dvla" className="text-white hover:underline">
                DVLA Lookup
              </Link>
            </li>
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
