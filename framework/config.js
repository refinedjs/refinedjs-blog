const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  prod: process.env.PRODUCTION
};

module.exports = config;