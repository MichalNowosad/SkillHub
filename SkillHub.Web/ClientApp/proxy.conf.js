const { env } = require('process');

const aspNetCoreUrl = env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:5170';
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` : aspNetCoreUrl;

const PROXY_CONFIG = [
  {
    context: [
      "/api/**"
   ],
    target: target,
    secure: false,
    logLevel: "debug",
    headers: {
      Connection: 'Keep-Alive'
    }
  },
]

module.exports = PROXY_CONFIG;
