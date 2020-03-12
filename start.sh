#!/usr/bin/env bash

. ~/.nvm/nvm.sh

nvm use
yarn
yarn scss-compile
yarn start
node-sass -o dist/css src/scss/main.scss -w
