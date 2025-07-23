/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 's2.coinmarketcap.com'], // Add domains for DEX logos
  },
};

module.exports = nextConfig;
