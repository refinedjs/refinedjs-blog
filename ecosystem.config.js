module.exports = {
  /**
   * Application configuration
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Application
    {
      name      : 'refinedjs',
      script    : './server.js',
      env: {
        NODE_ENV: 'dev'
      },
      env_staging: {
        NODE_ENV: 'stage'
      },
      env_production : {
        NODE_ENV: 'prod'
      }
    }
  ]
};
