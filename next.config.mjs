/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ru', 'ro'],  // Поддерживаемые языки
    defaultLocale: 'en',  // Язык по умолчанию
  },
  reactStrictMode: true,  // Включаем строгий режим (по желанию)
};

export default nextConfig;
