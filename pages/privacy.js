import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Tristan Jarrett</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your personal data on our website and in our apps."
        />
        <meta name="keywords" content="privacy policy, data protection, website, app" />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://tristanjarrett.com/privacy" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <div className="container mx-auto ">
          <Header />
        </div>

        <div className="container px-4 mx-auto flex-grow">
          <div className="pb-16 lg:pb-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="lg:w-3/5">

              <Link href="/" className="inline-block py-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                  <span className="text-lg font-medium">Back to Profile</span>
                </div>
              </Link>

              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="mb-6">
                This privacy policy discloses the privacy practices for Tristan Jarrett and our website (tristanjarrett.com) and mobile applications (Fridg, Futhark, PercentX & UnitX). This privacy policy applies solely to information collected by this website and our mobile applications.
              </p>
              <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
              <p className="mb-6">
                We only collect information that you voluntarily provide to us through our website contact form or through our mobile applications. This information may include your name, email address, and any other information you choose to provide us in your message or in your use of the mobile applications. We will use this information solely for the purpose of responding to your inquiries or providing you with the requested services through our mobile applications.
              </p>
              <p className="mb-6">
                We use Google Analytics to track website usage and improve our services. Google Analytics collects information such as your device type, IP address, and other usage data. Google Analytics may also use cookies and other tracking technologies to collect this information. You can learn more about how Google Analytics collects and processes data by visiting the Google Analytics Terms of Service.
              </p>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="mb-6">
                We use Google ReCaptcha to prevent spam and abuse on our website contact form. Google ReCaptcha collects information about your device and IP address in order to provide this service. You can learn more about how Google ReCaptcha collects and processes data by visiting the Google Privacy Policy.
              </p>
              <p className="mb-6">
                Our mobile applications use Apple CloudKit to store user favourites. Apple CloudKit collects information about your device and usage data in order to provide this service. You can learn more about how Apple CloudKit collects and processes data by visiting the Apple Privacy Policy.
              </p>
              <p className="mb-6">
                Our mobile applications use Google AdMob to display ads. Google AdMob may collect information such as your device type, IP address, and other usage data to provide personalised ads. You can learn more about how Google AdMob collects and processes data by visiting the Google Privacy Policy.
              </p>
              <h2 className="text-2xl font-bold mb-4">Firebase Services</h2>
              <p className="mb-6">
                Our mobile applications integrate Firebase services provided by Google. These services include Firebase Firestore (for database storage), Firebase Storage (for file storage), Firebase Authentication (for user authentication), Firebase Crashlytics (for crash reporting), and other default Firebase tools. These services may collect and process information such as your device type, IP address, and usage data. Firebase Authentication may also collect and store information such as your email address and any other data necessary for login or account management.
              </p>
              <p className="mb-6">
                Firebase Crashlytics is used to monitor app performance and detect errors or crashes. This service collects crash data, device information, and other diagnostic data to help us improve the reliability of our applications.
              </p>
              <p className="mb-6">
                Firebase services may use cookies or other tracking technologies to gather data. You can learn more about how Firebase collects and processes data by visiting the Firebase Privacy Policy.
              </p>
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="mb-6">
                We take appropriate security measures to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
              <h2 className="text-2xl font-bold mb-4">Updates</h2>
              <p className="mb-6">
                Our Privacy Policy may change from time to time and all updates will be posted on this page. Your continued use of our website or mobile applications after any changes to the Privacy Policy constitutes your acceptance of the new terms.
              </p>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions or concerns regarding our Privacy Policy, please contact us at (hello@tristanjarrett.com).
              </p>
              <p>Last updated on 12 December 2024</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
