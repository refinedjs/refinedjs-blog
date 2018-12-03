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
        NODE_ENV: 'development',
        DB_ENV: 'mongodb_docker'
      },
      env_staging: {
        NODE_ENV: 'staging',
        DB_ENV: 'mongodb_docker'
      },
      env_production: {
        NODE_ENV: 'production',
        DB_ENV: 'mongodb_docker'
      }
    }
  ]
};
