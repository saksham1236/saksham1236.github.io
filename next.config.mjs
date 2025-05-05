/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'pandas.pydata.org',
        pathname: '/static/img/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/numpy/numpy/refs/heads/main/branding/logo/logomark/**',
      },
      {
        protocol: 'https',
        hostname: 'matplotlib.org',
        pathname: '/stable/_images/**',
      },
      {
        protocol: 'https',
        hostname: 'seaborn.pydata.org',
        pathname: '/_images/**',
      },
    ],
  },
}

export default nextConfig
