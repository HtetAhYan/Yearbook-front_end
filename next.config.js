/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
     {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
    
  }
}

module.exports = nextConfig
