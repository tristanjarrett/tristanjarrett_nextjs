/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/apps',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tools',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dvla',
        destination: '/tools/dvla',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
