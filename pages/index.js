import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tristan Jarrett | Software Engineer</title>
        <meta name="description" content="Building bespoke apps and websites enhanced with AI for the best security and performance" />
        <meta property="og:title" content="Tristan Jarrett | Software Engineer" />
        <meta property="og:description" content="Building bespoke apps and websites enhanced with AI for the best security and performance" />
        <meta property="og:image" content="screenshot.png" />
        <meta property="og:url" content="https://tristanjarrett.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tristan Jarrett | Software Engineer" />
        <meta name="twitter:description" content="Building bespoke apps and websites enhanced with AI for the best security and performance" />
        <meta name="twitter:image" content="screenshot.png" />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-5xl font-bold mb-10 lg:pr-20">
                Hey! I'm <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500">Tristan</span>, a Software Engineer with nearly ten years of experience.
              </h1>
              <p className="text-xl mb-4">
                I have worked on a wide variety of
                projects, including website development, mobile app development, SaaS
                solutions, and Web3 applications that leverage smart contracts and
                cryptocurrencies. As a seasoned professional, I am dedicated to
                delivering high-quality work and helping my clients achieve their
                objectives.
              </p>
              <ul className="flex space-x-4 mt-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tristanjarrett/" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/tristangjarrett" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                    <span class="sr-only">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tristanjarrett" className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                    <span class="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://ko-fi.com/tristanjarrett" className="hover:text-orange-500" target="_blank" rel="noopener noreferrer">
                    <span class="sr-only">Ko-fi</span>
                    <FontAwesomeIcon icon={faCoffee} size="2x" />
                  </a>
                </li>
              </ul>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Try my apps (iOS)</h2>
                <ul className="flex space-x-4 mb-8">
                  {[
                    { href: 'https://apps.apple.com/app/id6443659537', src: 'futhark.png', alt: 'Futhark' },
                    { href: 'https://apps.apple.com/app/id6448712135', src: 'percentx.png', alt: 'PercentX' },
                  ].map(({ href, src, alt }) => (
                    <li key={alt} className="group relative">
                      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative">
                          <Image src={`/brands/${src}`} alt={alt} width={100} height={100} className="rounded-lg border-2 border-gray-200 dark:border-gray-800" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" className="text-white" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">What am I up to?</h2>
                <ul className="flex space-x-4 mb-8">
                  {[
                    { href: 'https://dysrupt.co.uk', src: 'dysrupt.png', alt: 'Dysrupt' },
                    { href: 'https://solution17.co.uk', src: 'solution17.jpeg', alt: 'Solution17' },
                    { href: 'https://fyiro.io', src: 'fyiro.png', alt: 'Fyiro' },
                    { href: 'https://nftbulq.com', src: 'bulq.png', alt: 'BulQ' },
                  ].map(({ href, src, alt }) => (
                    <li key={alt} className="group relative">
                      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative">
                          <Image src={`/brands/${src}`} alt={alt} width={100} height={100} className="rounded-lg border-2 border-gray-200 dark:border-gray-800" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" className="text-white" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="contact" className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Get in touch!</h2>
                <ContactForm />
              </div>

            </div>
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative sticky top-10 hidden lg:block">
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 w-full h-full rounded-3xl shadow-lg absolute -left-4 -bottom-4 z-0 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500"></div>
              <Image
                src="/tristan.jpg"
                alt="Tristan"
                width={500}
                height={500}
                className="rounded-3xl shadow-lg relative z-10"
              />
            </div>

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
