import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Tristan Jarrett</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal data on our website and in our apps." />
        <meta name="keywords" content="privacy policy, data protection, website, app" />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="lg:w-3/5">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

              <p className="mb-6">
                This privacy policy discloses the privacy practices for Tristan Jarrett and our website (tristanjarrett.com) and mobile applications (Futhark). This privacy policy applies solely to information collected by this website and our mobile applications.
              </p>

              <h2 className="text-2xl font-bold mb-4">Information Collection, Use, and Sharing</h2>

              <p className="mb-6">
                We are the sole owners of the information collected on this site and in our mobile applications. We only have access to/collect information that you voluntarily give us via email, through the use of our contact form, or other direct contact from you. We will not sell or rent this information to anyone.
              </p>

              <p className="mb-6">
                We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
              </p>

              <h2 className="text-2xl font-bold mb-4">Security</h2>

              <p className="mb-6">
                We take precautions to protect your information. When you submit sensitive information via the website or mobile applications, your information is protected both online and offline.
              </p>

              <h2 className="text-2xl font-bold mb-4">Updates</h2>

              <p className="mb-6">
                Our Privacy Policy may change from time to time and all updates will be posted on this page.
              </p>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <p className="mb-6">
                If you have any questions or concerns regarding our Privacy Policy, please contact us at (hello@tristanjarrett.com).
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
