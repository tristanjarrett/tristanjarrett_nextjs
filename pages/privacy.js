import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://tristanjarrett.com/privacy" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="lg:w-3/5">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="mb-6">
                This privacy policy discloses the privacy practices for Tristan Jarrett and our website (tristanjarrett.com) and mobile applications (Futhark, PercentX, UnitX). This privacy policy applies solely to information collected by this website and our mobile applications.
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
                Our mobile applications use Google AdMob to display ads. Google AdMob may collect information such as your device type, IP address, and other usage data to provide personalized ads. You can learn more about how Google AdMob collects and processes data by visiting the Google Privacy Policy.
              </p>
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="mb-6">
                We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
              <h2 className="text-2xl font-bold mb-4">Updates</h2>
              <p className="mb-6">
                Our Privacy Policy may change from time to time and all updates will be posted on this page. Your continued use of our website or mobile applications after any changes to the Privacy Policy constitutes your acceptance of the new terms.
              </p>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions or concerns regarding our Privacy Policy, please contact us at (hello@tristanjarrett.com).
              </p>
              <p>Last updated on 2 June 2023</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
