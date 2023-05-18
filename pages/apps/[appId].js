import { useRouter } from 'next/router';
import { useState } from 'react';
import appData from '@/data/apps.json';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

export default function AppDetails() {
  const router = useRouter();
  const { appId } = router.query;
  const app = appData.find((app) => app.id === appId);

  // Custom renderer for unordered lists
  const CustomListRenderer = ({ children }) => (
    <ul className="list-disc ml-4 mb-4">{children}</ul>
  );

  // Custom renderer for list items
  const CustomListItemRenderer = ({ children }) => (
    <li>{children}</li>
  );

  // version history
  const [showOldReleases, setShowOldReleases] = useState(false);
  const latestRelease = app?.releases?.[app.releases.length - 1];
  const olderReleases = app?.releases?.slice(0, app.releases.length - 1).reverse();

  // other apps
  const otherApps = appData.filter((otherApp) => otherApp.id !== appId);

  if (!app) {
    return <div>App not found!</div>;
  }

  return (
    <>
      <Head>
        <title>{app.name} - Tristan Jarrett</title>
        <meta
          name="description"
          content={app.promo}
        />
        <meta name="keywords" content={app.keywords} />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                  width={40}
                  height={40}
                  className="rounded-lg border-2 border-gray-200 dark:border-gray-800 mr-4"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {otherApps.map((otherApp) => (
              <Link key={otherApp.id} href={`/apps/${otherApp.id}`}>
                <div className="group block bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col h-full">
                  <div className="flex items-center p-4 flex-grow">
                    <div className="mr-4">
                      <Image
                        src={`/brands/${otherApp.icon}`}
                        alt="App Icon"
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
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
