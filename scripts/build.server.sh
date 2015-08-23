#!/bin/bash
export $( cat .env-production|xargs)
./node_modules/.bin/babel server --out-dir dist/server
