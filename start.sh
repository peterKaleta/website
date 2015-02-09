#!/bin/bash
echo "building app"
gulp build
echo "starting services"
node server/app.js
echo "done done"
