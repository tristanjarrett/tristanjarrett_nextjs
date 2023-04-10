import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [isSuccess, setIsSuccess] = useState(false); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   emailjs
  //     .sendForm(
  //       'service_ucwym58',
  //       'template_mjft6ee',
  //       '#contact-form',
  //       'tMFc16INtfK2kwXXh'
  //     )
  //     .then(
  //       () => {
  //         setIsSuccess(true); // set the state variable to true
  //         reset();
  //       },
  //       (error) => {
  //         alert(`An error occurred while sending your message: ${error.text}`);
  //       }
  //     );
  // };

  const onSubmit = (data) => {
    grecaptcha.execute('6Ld0knQlAAAAACK-5SFSB5-VrsfIeQTI4KXd8O6T', {action: 'submit'}).then(function(token) {
      emailjs.sendForm('service_ucwym58', 'template_mjft6ee', '#contact-form', 'tMFc16INtfK2kwXXh', {
        'g-recaptcha-response': token
      }).then(
        () => {
          setIsSuccess(true);
          reset();
        },
        (error) => {
          alert(`An error occurred while sending your message: ${error.text}`);
        }
      );
    });
  };

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
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-4 px-6 w-full flex justify-between items-center shadow-lg">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-white">Tristan Jarrett</span>
          </div>
          <a href="#contact" className="text-xl font-medium text-white hover:underline">
            Get in touch!
          </a>
        </nav>

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-5xl font-bold mb-10 lg:pr-20">
                Hey! I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Tristan</span>, a Software Engineer with over
                <span className="bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent"> Eight</span> years of experience.
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
                  <a href="https://github.com/tristanjarrett" className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                    <span class="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/tristangjarrett" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                    <span class="sr-only">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
              </ul>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">What am I up to?</h2>
                <ul className="flex space-x-4 mb-8">
                  {[
                    { href: 'https://dysrupt.co.uk', src: '/dysrupt.jpeg', alt: 'Dysrupt' },
                    { href: 'https://solution17.co.uk', src: '/solution17.jpeg', alt: 'Solution17' },
                    { href: 'https://fyiro.io', src: '/fyiro.png', alt: 'Fyiro' },
                    { href: 'https://nftbulq.com', src: '/bulq.png', alt: 'BulQ' },
                  ].map(({ href, src, alt }) => (
                    <li key={alt} className="group relative">
                      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative">
                          <Image src={src} alt={alt} width={100} height={100} className="rounded-lg" />
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
                <h2 className="text-2xl font-bold mb-6">Lets work together</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="contact-form"
                  className="w-full mx-auto p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800"
                >
                  <div className="mb-6 w-full">
                    <label htmlFor="name" className="block font-semibold mb-2">
                      Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      id="name"
                      type="text"
                      className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-2">This field is required</p>
                    )}
                  </div>
                  <div className="mb-6 w-full">
                    <label htmlFor="email" className="block font-semibold mb-2">
                      Email
                    </label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      id="email"
                      type="email"
                      className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-2">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                  <div className="mb-6 w-full">
                    <label htmlFor="message" className="block font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message', { required: true })}
                      id="message"
                      rows="5"
                      className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:border-purple-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 mt-2">This field is required</p>
                    )}
                  </div>
                  <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white font-bold px-4 py-4 rounded-md hover:from-blue-400 hover:via-purple-400 hover:to-indigo-400 w-full"
                  >
                    Send message
                  </button>
                  {isSuccess && (
                    <p className="text-green-500 mt-6">Your message was sent successfully!</p>
                  )}
                </form>
              </div>

            </div>
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative sticky top-10 hidden lg:block">
              <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-pink-500 w-full h-full rounded-3xl shadow-lg absolute -left-4 -bottom-4 z-0"></div>
              <Image
                src="/tristan.jpeg"
                alt="Tristan"
                width={500}
                height={500}
                className="rounded-3xl shadow-lg relative z-10"
              />
            </div>

          </div>

        </div>

        <footer className="pb-6 text-center">
          <p className='text-lg text-gray-800 dark:text-white'>
            &copy; {new Date().getFullYear()} Tristan Jarrett, made with <FontAwesomeIcon icon={faCoffee} size="1x" />
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
