#!/bin/bash
export $( cat .env-production|xargs)
npm install && ./node_modules/.bin/bower install
cp sample.env .env
cp sample.env-production .env-production
