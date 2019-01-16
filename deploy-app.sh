#!/usr/bin/env sh

yarn install

yarn run stageBuild

pm2-runtime start ecosystem.config.js