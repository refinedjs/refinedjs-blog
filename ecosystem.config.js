module.exports = {
  /**
   * Application configuration
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Application
    {
      name      : 'refinedjs-app',
      script    : './server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
