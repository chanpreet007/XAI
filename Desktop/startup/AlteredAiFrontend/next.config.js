const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://localhost:8000/v1/:path*',
      },
    ];
  },

  async serverMiddleware() {
    // proxy middleware options
    const options = {
      target: 'http://localhost:8000', // target url
      changeOrigin: true, // needed for virtual hosted sites
      // pathRewrite: {
      //   '^/api': '/', // remove /api from the start of the url path
      // },
    };

    // create the proxy middleware
    const proxy = createProxyMiddleware(options);

    // apply the middleware
    return (req, res, next) => {
      // exclude Next.js specific files
      if (req.url.startsWith('/_next') || req.url.startsWith('/static')) {
        return next();
      }

      // proxy the request
      proxy(req, res, next);
    };
  },
};
