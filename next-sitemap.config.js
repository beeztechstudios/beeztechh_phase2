/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.beeztech.studio',
  generateRobotsTxt: true, // optional
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // Optional: include extra pages (like dynamic blog pages)
  additionalPaths: async (config) => [
    await config.transform(config, '/services/web-app-development'),
    await config.transform(config, '/services/branding'),
    await config.transform(config, '/services/digital-marketing'),
    await config.transform(config, '/services/media-production'),
    await config.transform(config, '/about'),
    // await config.transform(config, '/contact'),
    await config.transform(config, '/book-call'),
    await config.transform(config, '/blogs'),
  ],
};
