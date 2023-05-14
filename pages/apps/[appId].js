import { useRouter } from 'next/router';
import appData from '@/data/apps.json';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function AppDetails() {
  const router = useRouter();
  const { appId } = router.query;
  const app = appData.find((app) => app.id === appId);

  if (!app) {
    return <div>App not found!</div>;
  }

  return (
    <>
      <Head>
        <title>{app.name} - Tristan Jarrett</title>
        <meta
          name="description"
          content={`Download ${app.name} today!`}
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
                  className="rounded-xl border-2 border-gray-200 dark:border-gray-800 mr-4"
                />
                <h1 className="text-3xl lg:text-4xl font-bold">{app.name}</h1>
              </div>
              <div className="description">
                <ReactMarkdown>{app.description}</ReactMarkdown>
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
                    width={160}
                    height={160}
                  />
                </a>
              </div>
              <h2 className="mt-8">Releases:</h2>
              <ul className="mt-4">
                {app.releases.slice().reverse().map((release) => (
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

        <Footer />
      </div>
    </>
  );
}
