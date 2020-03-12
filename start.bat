@echo off

nvm use && yarn && yarn scss-compile && yarn start && node-sass -o dist/css src/scss/main.scss -w
