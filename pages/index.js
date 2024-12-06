import { useState, useEffect } from "react";
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
    { name: "Swift" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Dart" },
    { name: "C#" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "Flutter" },
    { name: "SwiftUI" },
    { name: "Firebase" },
    { name: "Machine Learning" },
    { name: "Computer Vision" },
    { name: "Unity" },
    { name: "+ more 💤" },
  ];

  const hobbies = [
    { name: "👨🏼‍💻" },
    { name: "☕️" },
    { name: "🐠" },
    { name: "🥾" },
    { name: "📷" },
    { name: "🚀" },
    { name: "👾" },
  ];

  const titles = ["Software Engineer", "App Developer", "Web Developer"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  // Determine "a" or "an" based on the title
  const getArticle = (title) =>
    ["a", "e", "i", "o", "u"].includes(title[0]?.toLowerCase()) ? "an" : "a";

  const fallbackTitle = titles[loopIndex % titles.length]; // Safely calculate fallback title

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.getElementById("dynamic-title");
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        setIsTitleVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopIndex % titles.length;
      const fullText = titles[i];
  
      if (!isDeleting && currentTitle === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return;
      }
  
      if (isDeleting && currentTitle === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(150);
        return;
      }
  
      setCurrentTitle((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    };
  
    if (isTitleVisible) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [currentTitle, isDeleting, loopIndex, typingSpeed, titles, isTitleVisible]);

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
          content="software engineer, app developer, web developer, AI, security, performance, seo, application, swift, flutter, VR, vision, machine learning"
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
        <link rel="icon" href="/favicon.ico" alt="TJ" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#002554"></meta>
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <div className="container mx-auto ">
          <Header />
        </div>

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-10 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="w-full lg:w-2/3">

              <div className="flex flex-col-reverse sm:flex-row mb-10 items-center">
                <div className="max-sm:w-full w-3/4 lg:w-full">
                  <h1
                    id="dynamic-title"
                    className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold lg:pr-20"
                    style={{ minHeight: "4rem" }}
                  >
                    👋 I'm{" "}
                    <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500">
                      Tristan Jarrett
                    </span>
                    ,{" "}
                    <br />
                    <span>
                      {getArticle(isTitleVisible ? currentTitle : fallbackTitle)}
                    </span>{" "}
                    <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500">
                      {isTitleVisible ? currentTitle : fallbackTitle}
                    </span>
                    .
                  </h1>
                </div>
                
                <div className="max-sm:w-full  w-1/4 flex max-sm:mb-10 sm:justify-end lg:hidden">
                  <div className="relative max-sm:left-2">
                    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 w-[150px] h-[150px] rounded-3xl shadow-lg absolute right-2 top-2 z-0 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500"></div>
                    <Image
                      src="/tristan.jpg"
                      alt="Tristan"
                      width={150}
                      height={150}
                      className="rounded-3xl shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </div>

              <p className="text-xl lg:text-2xl mb-4">
                Hi there! I'm Tristan, a tech enthusiast who loves turning ideas into apps, websites, and all things digital. I've always been obsessed with Apple devices, and building for their ecosystem has been a lifelong dream of mine. Whether it's creating sleek web platforms, crafting mobile apps, or experimenting with AI and machine learning, I'm all about creating cool stuff that makes life easier (and a little more fun!).
              </p>

              <p className="text-xl lg:text-2xl mb-4">
                When I'm not coding, you'll probably find me exploring local cafes for the perfect coffee, hiking trails, or snapping photos of whatever catches my eye.
              </p>

              <p className="text-xl lg:text-2xl mb-4">
                Let's build something awesome together!{" "}
                <a href="#contact" className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500 hover:opacity-75">
                  I'm open for new projects and opportunities
                </a>
                .
              </p>

              <ul className="flex space-x-4 mt-8 lg:hidden">
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
                <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-lg"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Where to find me</h2>
                <ul className="flex space-x-4 mb-8">
                  {[
                    { href: 'https://dysrupt.co.uk', src: 'dysrupt.png', alt: 'Dysrupt' },
                    { href: 'https://www.fiverr.com/tristanjarrett', src: 'fiverr.png', alt: 'Fiverr' },
                    { href: 'https://www.upwork.com/freelancers/~0151e0fcdbb73a2e76', src: 'upwork.png', alt: 'Upwork' },
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
                            width={120}
                            height={120}
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

              <div className="mt-12 lg:hidden">
                <h2 className="text-2xl font-bold mb-6">Hobbies & Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-3xl"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div id="contact" className="mt-4 pt-8">
                <h2 className="text-2xl font-bold mb-6">Get in touch!</h2>
                <ContactForm />
              </div>
            </div>

            <div className="w-full lg:w-1/3 mb-10 lg:mb-0 sticky top-10 hidden lg:block">
              <div className="relative mb-12">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 w-full h-full rounded-3xl shadow-lg absolute right-4 top-4 z-0 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500"></div>
                <Image
                  src="/tristan.jpg"
                  alt="Tristan"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg relative z-10"
                />
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Connect</h2>
                <ul className="flex space-x-4">
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
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Hobbies & Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-3xl"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
