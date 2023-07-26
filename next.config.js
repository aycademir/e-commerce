/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api-server', 'i.fbcd.co'] // add your own domain here if needed!
  }
}

module.exports = nextConfig
