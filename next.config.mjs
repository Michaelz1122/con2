/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
    ],
    modularizeImports: {
      'lucide-react': {
        transform: 'lucide-react/icons/{{member}}',
      },
      'date-fns': {
        transform: 'date-fns/{{member}}',
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

