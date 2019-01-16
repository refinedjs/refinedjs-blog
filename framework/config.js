const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  prod: process.env.PRODUCTION,
  mongodb_local: process.env.DB_LOCAL,
  mongodb_docker: process.env.DB_DOCKER
};

module.exports = config;