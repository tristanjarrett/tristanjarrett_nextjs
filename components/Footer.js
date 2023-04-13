import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="pb-6 text-center">
        <p className='text-lg text-gray-800 dark:text-white'>
        &copy; {new Date().getFullYear()} Tristan Jarrett, made with <FontAwesomeIcon icon={faCoffee} size="1x" />
        </p>
        <p className='text-gray-500'>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        {' | '}
        <a href="https://ko-fi.com/tristanjarrett" className="hover:underline">Ko-Fi</a>
        </p>
    </footer>
  );
};

export default Footer;

// v2
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
//         <div className="flex items-center">
//           <p className="text-lg">&copy; {new Date().getFullYear()} Tristan Jarrett, made with <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: 'red' }} /></p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
//           <a href="https://ko-fi.com/tristanjarrett" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded flex items-center">
//             <FontAwesomeIcon icon={faCoffee} size="lg" className="mr-2" /> Ko-Fi
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
