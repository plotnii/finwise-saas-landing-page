/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ru', 'ro'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,  // Включаем строгий режим (по желанию)
};

export default nextConfig;
