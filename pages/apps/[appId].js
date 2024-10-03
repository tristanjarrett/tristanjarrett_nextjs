import { useState } from 'react';
import appData from '@/data/apps.json';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

// Custom renderer for unordered lists
const CustomListRenderer = ({ children }) => (
  <ul className="list-disc ml-4 mb-4">{children}</ul>
);

// Custom renderer for list items
const CustomListItemRenderer = ({ children }) => (
  <li>{children}</li>
);

export default function AppDetails({ app }) {
  // version history
  const [showOldReleases, setShowOldReleases] = useState(false);
  const latestRelease = app?.releases?.[app.releases.length - 1];
  const olderReleases = app?.releases?.slice(0, app.releases.length - 1).reverse();

  // other apps
  const otherApps = appData.filter((otherApp) => otherApp.id !== app.id);

  return (
    <>
      <Head>
        <title>{app.name} | {app.subtitle}</title>
        <meta
          name="description"
          content={app.promo}
        />
        <meta name="keywords" content={app.keywords} />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={`https://tristanjarrett.com/apps/${app.id}`} />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Image
                  src={`/brands/${app.icon}`}
                  alt="App Icon"
                  width={50}
                  height={50}
                  className="rounded-lg shadow-lg mr-4"
                />
                <h1 className="text-3xl lg:text-4xl font-bold">{app.name}</h1>
              </div>
              <div className="description">
                <ReactMarkdown
                  components={{
                    ul: CustomListRenderer,
                    li: CustomListItemRenderer,
                  }}
                >
                  {app.description}
                </ReactMarkdown>
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                <a
                  href={app.appstore_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/appstore/badge-preferred.svg"
                    alt="App Store"
                    width={160}
                    height={160}
                  />
                </a>
                {app.playstore_link && (
                  <a
                    href={app.playstore_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block ml-4"
                  >
                    <Image
                      src="/playstore/playstore.svg"
                      alt="Play Store"
                      width={180}
                      height={180}
                    />
                  </a>
                )}
                </div>
              </div>
              <h2 className="mt-8">Releases:</h2>
              <ul className="mt-4">
                <li>
                  <h3 className="font-semibold">{latestRelease.version}</h3>
                  <ul className="list-disc ml-4 mt-2">
                    {latestRelease.changelog.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </li>
              </ul>

              {olderReleases.length > 0 && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowOldReleases(!showOldReleases)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {showOldReleases ? 'Hide old releases' : 'Show old releases'}
                  </button>
                  {showOldReleases && (
                    <ul className="mt-2">
                      {olderReleases.map((release) => (
                        <li key={release.version} className="mb-4">
                          <h3 className="font-semibold">{release.version}</h3>
                          <ul className="list-disc ml-4 mt-2">
                            {release.changelog.map((change, index) => (
                              <li key={index}>{change}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div className="lg:w-1/2">
              <div className="mt-4 grid grid-cols-3 gap-4">
                {app.screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    src={`/apps/${app.id}/${screenshot}`}
                    alt="App Screenshot"
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pb-16 px-4 md:px-0">
          <hr className="border-gray-200 dark:border-gray-800 mb-16" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">My other apps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {otherApps.map((otherApp) => (
              <Link key={otherApp.id} href={`/apps/${otherApp.id}`}>
                <div className="group block bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full">
                  <div className="flex items-center p-4 flex-grow">
                    <div className="mr-4">
                      <div className="app-icon-container">
                        <Image
                          src={`/brands/${otherApp.icon}`}
                          alt="App Icon"
                          width={80}
                          height={80}
                          className="rounded-md shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{otherApp.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{otherApp.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

// This function runs on the server before the page is rendered
export async function getServerSideProps(context) {
  const { appId } = context.params;
  const app = appData.find((app) => app.id === appId);

  // If we couldn't find the app, return a 404 status
  if (!app) {
    return {
      notFound: true,
    };
  }

  // Otherwise, return the app data as props
  return {
    props: { app },
  };
}
