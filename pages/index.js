import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import appData from "@/data/apps.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const techStack = [
    { name: "React" },
    { name: "Swift" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "Flutter" },
    { name: "Machine Learning" },
    { name: "Python" },
    { name: "Dart" },
    { name: "Next.js" },
    { name: "SwiftUI" },
    { name: "Computer Vision" },
  ];

  return (
    <>
      <Head>
        <title>Tristan Jarrett | Software Engineer</title>
        <meta
          name="description"
          content="Building bespoke apps and websites enhanced with AI for the best security and performance"
        />
        <meta
          name="keywords"
          content="software engineer, app developer, website developer, AI, security, performance"
        />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://tristanjarrett.com" />
        <meta
          property="og:title"
          content="Tristan Jarrett | Software Engineer"
        />
        <meta
          property="og:description"
          content="Building bespoke apps and websites enhanced with AI for the best security and performance"
        />
        <meta
          property="og:image"
          content="https://tristanjarrett.com/screenshot.png"
        />
        <meta property="og:url" content="https://tristanjarrett.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tristan Jarrett | Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Building bespoke apps and websites enhanced with AI for the best security and performance"
        />
        <meta
          name="twitter:image"
          content="https://tristanjarrett.com/screenshot.png"
        />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 lg:pr-20">
                Hey! I'm{" "}
                <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500">
                  Tristan
                </span>
                , a Software Engineer with over ten years of experience.
              </h1>

              <p className="text-xl mb-4">
                I have worked on a wide variety of projects, including website
                development, mobile app development, SaaS solutions, and Web3
                applications that leverage smart contracts and cryptocurrencies.
                As a seasoned professional, I am dedicated to delivering
                high-quality work and helping my clients achieve their
                objectives.
              </p>

              <p className="text-xl mb-4">
                In my free time, I enjoy exploring new cafes, hiking, driving
                cars, and building apps.
              </p>

              <ul className="flex space-x-4 mt-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tristanjarrett"
                    className="hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/tristangjarrett"
                    className="hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">X</span>
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/tristangjarrett"
                    className="hover:text-pink-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tristanjarrett"
                    className="hover:text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
              </ul>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">My #TechStack</h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-800"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  I've published some apps
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {appData.map((app) => (
                    <Link key={app.id} href={`/apps/${app.id}`}>
                      <div className="group block bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full">
                        <div className="flex items-center p-4 flex-grow">
                          <div className="mr-4">
                            <div className="app-icon-container">
                              <Image
                                src={`/brands/${app.icon}`}
                                alt="App Icon"
                                width={80}
                                height={80}
                                className="rounded-md shadow"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                              {app.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {app.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Where to find me</h2>
                <ul className="flex space-x-4 mb-8">
                  {[
                    { href: 'https://dysrupt.co.uk', src: 'dysrupt.png', alt: 'Dysrupt' },
                  ].map(({ href, src, alt }) => (
                    <li key={alt} className="group relative">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative">
                          <Image
                            src={`/brands/${src}`}
                            alt={alt}
                            width={100}
                            height={100}
                            className="rounded-xl shadow-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              size="lg"
                              className="text-white"
                            />
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
