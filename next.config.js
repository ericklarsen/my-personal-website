const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV !== "production",
    buildExcludes: [/middleware-manifest.json$/]
  },
  images: {
    domains: ["i.ibb.co"],
  },
  swcMinify: true,
});
