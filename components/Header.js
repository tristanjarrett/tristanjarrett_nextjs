import React from 'react';
import Image from 'next/image'
import Icon from '@/public/icon.svg'

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-4 px-6 w-full flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <Image src={Icon} width={40} height={40} className="mr-4" />
        <span className="text-xl font-semibold text-white"><a href="/">Tristan Jarrett</a></span>
      </div>
      <a href="/#contact" className="text-xl font-medium text-white hover:underline">
        Get in touch!
      </a>
    </nav>
  );
};

export default Header;
