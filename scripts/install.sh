#!/bin/bash
export $( cat .env-production|xargs)
npm install --ignore-scripts
./node_modules/.bin/bower install
cp sample.env .env
cp sample.env-production .env-production
