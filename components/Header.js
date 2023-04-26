import React from 'react';
import Image from 'next/image'
import Icon from '@/public/icon.webp'

const Header = () => {
  return (
    <nav className="bg-blue-950 py-4 px-4 w-full flex justify-between items-center shadow-lg">
      <div>
        <a href="/" className="flex items-center">
          <Image src={Icon} width={50} height={50} className="mr-4" alt="Icon" />
          <span className="text-xl font-semibold text-white">Tristan Jarrett</span>
        </a>
      </div>
      <a href="/#contact" className="text-xl font-medium text-white hover:underline">
        Get in touch!
      </a>
    </nav>
  );
};

export default Header;
