#!/bin/bash
export $( cat .env|xargs)
./node_modules/nodemon/bin/nodemon.js \
  --exec node_modules/.bin/babel-node \
    --stage 0 \
    -- ./server/app.js
