const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the base URL path you want to proxy
    createProxyMiddleware({
      target: 'https://firebasestorage.googleapis.com', // Specify the target URL of the server causing the CORS error
      changeOrigin: true,
    })
  );
};
