import path from 'path';  // Добавьте этот импорт

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ru', 'ro'],  // Поддерживаемые языки
    defaultLocale: 'en',  // Язык по умолчанию
  },
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@locales'] = path.resolve(__dirname, 'src/locales');
    return config;
  },
};

export default nextConfig;
