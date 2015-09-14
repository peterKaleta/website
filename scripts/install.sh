#!/bin/bash
export $( cat .env-production|xargs)
./node_modules/.bin/bower install
cp sample.env .env
cp sample.env-production .env-production
