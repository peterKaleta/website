#!/bin/bash
gulp build
node --es_staging build/server/app.js
