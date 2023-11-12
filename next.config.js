/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // sentry: {
  //   // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
  //   // for client-side builds. (This will be the default starting in
  //   // `@sentry/nextjs` version 8.0.0.) See
  //   // https://webpack.js.org/configuration/devtool/ and
  //   // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
  //   // for more information.
  //   hideSourceMaps: true,
  // },
}

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

module.exports = withNextIntl(nextConfig);
