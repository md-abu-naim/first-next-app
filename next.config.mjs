/** @type {import('next').NextConfig} */
const nextConfig ={
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.themealdb.com',
      },
    ],
  },
}

export default nextConfig;
