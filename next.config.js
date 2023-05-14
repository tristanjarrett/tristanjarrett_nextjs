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
    ];
  },
}

module.exports = nextConfig
