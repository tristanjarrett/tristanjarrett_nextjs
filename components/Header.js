import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import appData from '@/data/apps.json';

const Header = () => {
  const [showAppsMenu, setShowAppsMenu] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    }
  };

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
    <header className="bg-blue-950 shadow-lg mx-3 mt-3 rounded-xl">
      
      <nav className="py-4 px-6 flex justify-between items-center">

        <div className="flex items-center">
          <div
            className="w-3 h-3 bg-red-500 rounded-full mr-2"
            onClick={() => alert("Please don't leave without saying goodbye! (or at least a message)")}
          />
          <div
            className="w-3 h-3 bg-yellow-500 rounded-full mr-2"
            onClick={() => {
              if (!window.location.href.includes('/#contact')) {
                window.location.href = '/#contact';
              }
            }}
          />
          <div
            className="w-3 h-3 bg-green-500 rounded-full"
            onClick={toggleFullscreen}
          />
        </div>

        <div className="flex sm:hidden">
          <button className="text-gray-100 text-3xl focus:outline-none" onClick={handleMobileMenuClick}>
            <FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} />
          </button>
        </div>

        <div className="hidden sm:flex">
          <a href="/" className="text-xl font-medium text-gray-100 hover:underline mr-4">
            Profile
          </a>
          <div className="relative group mr-4">
            <button
              className="text-xl font-medium text-gray-100 hover:underline focus:outline-none"
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
              className="text-xl font-medium text-gray-100 hover:underline focus:outline-none"
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
          <a href="https://medium.com/@tristanjarrett" className="text-xl font-medium text-gray-100 hover:underline mr-4">
            Blog
          </a>
          <a href="/#contact" className="text-xl font-medium text-gray-100 hover:underline">
            Contact
          </a>
        </div>
      </nav>

      <div className={`sm:hidden pb-2 ${showMobileMenu ? 'block' : 'hidden'}`}>
        <a href="/" className="block py-2 text-xl font-medium text-gray-100 hover:underline px-4">
          Profile
        </a>
        <div className="py-2 px-4">
          <h3 className="text-lg font-medium text-gray-100">Apps</h3>
          <ul className="mt-2">
            {appData.map(app => (
              <li key={app.id} className="py-1 text-gray-100">
                <span className='mr-2'>-</span>
                <Link href={`/apps/${app.id}`} className="hover:underline">
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-2 px-4">
          <h3 className="text-lg font-medium text-gray-100">Tools</h3>
          <ul className="mt-2">
            <li className="py-1 text-gray-100">
              <span className='mr-2'>-</span>
              <Link href="/tools/dvla" className="hover:underline">
                DVLA Tax & MOT Checker (UK)
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://medium.com/@tristanjarrett" className="block py-2 text-xl font-medium text-gray-100 hover:underline px-4">
          Blog
        </a>
        <a href="/#contact" className="block py-2 text-xl font-medium text-gray-100 hover:underline px-4">
          Contact
        </a>
      </div>

    </header>
  );
};

export default Header;
