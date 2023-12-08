/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = {
  reactStrictMode: true,
  i18n,
  // images: {
  //   domains: ["panel.mondopedia.it","admin.elegantum.it"], // Add any other domains as needed
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panel.mondopedia.it',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.elegantum.it',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: '192.168.1.48',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
