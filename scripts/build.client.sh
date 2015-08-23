#!/bin/bash
export $( cat .env-production|xargs)

./node_modules/.bin/webpack \
  --colors \
  --verbose \
  --devtool eval \
  --progress \
  --display-chunks \
  --content-base dist \
  --optimize-occurence-order \
  --bail

mkdir dist/client/vendors
mkdir dist/client/images
cp -a client/bower_components/. dist/client/vendors/
cp -a client/assets/images/. dist/client/images/
