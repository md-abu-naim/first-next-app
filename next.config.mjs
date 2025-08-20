/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.themealdb.com',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/add-products',
        destination: '/admin-dashboard/add-products',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
