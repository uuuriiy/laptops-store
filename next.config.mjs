/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    PRODUCTION_URL: 'https://laptops-store.vercel.app/',
  },
  experimental: { 
    serverComponentsExternalPackages: ["@prisma/client, prisma"],
  },
  webpack(config) {
      config.module.rules.push({
        resolve: {
          alias: {
             handlebars: 'handlebars/dist/handlebars.min.js'
          },
        }
      })
      config.experiments = { ...config.experiments, topLevelAwait: true };
      
      return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ]
  },
};

export default nextConfig;
