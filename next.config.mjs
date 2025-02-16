import path from 'path';  // Импортируем path для работы с путями
import { fileURLToPath } from 'url';  // Импортируем для работы с url

/** @type {import('next').NextConfig} */
const nextConfig = {
//  i18n: {
    locales: ['en', 'ru', 'ro'],  // Поддерживаемые языки
    defaultLocale: 'en',  // Язык по умолчанию
  },
  reactStrictMode: true,
  webpack(config) {
    const __filename = fileURLToPath(import.meta.url);  // Получаем путь к текущему файлу
    const __dirname = path.dirname(__filename);  // Получаем директорию текущего файла

    config.resolve.alias['@locales'] = path.resolve(__dirname, 'src/locales');
    return config;
  },
};

export default nextConfig;
