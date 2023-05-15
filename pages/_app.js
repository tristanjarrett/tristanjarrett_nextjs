import '@/styles/globals.css'
import Script from 'next/script'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideCookieNotice = () => {
    setIsVisible(false);
    localStorage.setItem('cookieNoticeSeen', 'true');
  };

  useEffect(() => {
    const hasSeenCookieNotice = localStorage.getItem('cookieNoticeSeen');
    if (hasSeenCookieNotice === 'true') {
      setIsVisible(false);
    }
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 p-4 rounded-xl shadow-lg transition-opacity duration-300 ease-in-out opacity-0 ${isVisible ? 'opacity-100' : ''} bg-white dark:bg-gray-800 w-72 sm:w-auto`}>
      <div className="flex items-center justify-center sm:justify-start">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCookieBite} size="2x" />
        </span>
        <span className="mr-2">
          I eat cookies, do you want some?
        </span>
        <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 text-white font-bold px-4 py-2 rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500 dark:hover:from-yellow-400 dark:hover:via-orange-400 dark:hover:to-pink-400" onClick={hideCookieNotice}>
          Sure!
        </button>
      </div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4SKVPGW7X"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V4SKVPGW7X');
        `}
      </Script>
      <Script src="https://www.google.com/recaptcha/api.js?render=6Ld0knQlAAAAACK-5SFSB5-VrsfIeQTI4KXd8O6T"></Script>
      <Component {...pageProps} />
      <CookieNotice />
    </>
  )
}
