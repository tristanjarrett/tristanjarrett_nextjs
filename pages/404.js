import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404: Page Not Found</title>
        <meta name="description" content="We couldn't find the page you were looking for." />
        <meta name="keywords" content="404, not found" />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-center lg:space-x-20 text-center">
            <div className="lg:w-3/5">
              <h1 className="text-6xl font-bold mb-8">404</h1>
              <p className="text-4xl mb-6">
                Oops! We couldn't find the page you were looking for.
              </p>
              <p className="text-xl mb-8">
                The page may have been moved, or it no longer exists. If you typed in the address, please check your spelling. Could it be a typo?
              </p>
              <a 
                href="/" 
                className="text-2xl text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                Return to Home Page
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
