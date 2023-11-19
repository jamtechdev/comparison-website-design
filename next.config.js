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
};
module.exports = {
  images: {
    domains: ['panel.mondopedia.it'],
  },
};

module.exports = withPWA(nextConfig);
