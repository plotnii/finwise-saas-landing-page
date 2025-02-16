/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ru', 'ro'],
    defaultLocale: 'en'
  },
  reactStrictMode: true
};

module.exports = nextConfig;
