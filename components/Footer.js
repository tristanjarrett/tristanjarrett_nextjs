import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="pb-6 text-center">
        <p className='text-lg text-gray-800 dark:text-white'>
        &copy; {new Date().getFullYear()} Tristan Jarrett, made with <FontAwesomeIcon icon={faHeart} size="1x" />
        </p>
        <p className='text-gray-800 dark:text-gray-200'>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
    </footer>
  );
};

export default Footer;
