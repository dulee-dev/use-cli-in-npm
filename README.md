# apply-command-to-npm

## process

1. write package.json "bin" : {"my-command": "./bin/exec.js"}

2. write "#!/usr/bin/env node" at the top of the ts or js file

3. run $ npm link -> enroll bin

## trouble shooting

1. change chmod for exec.js

2. !# to set interpreter in js or ts

3. ERR_REQUIRE_ESM -> see version(chalk, inquirer)

## useful package

1. commandjs

option and --help

2. inquirer

user interaction

3. chalk

color cmd
