/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const config = {
  API_HOST: 'https://stageorigin.mid-day.com/mid-day-api/API/',
  ASSETS_HOST: 'https://www.mid-day.com/assets/images/',
  PRODUCTION_HOST: 'http://localhost:3000/',
};

module.exports = {
  nextConfig,
  config,
};
