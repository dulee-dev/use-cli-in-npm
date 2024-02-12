#!/usr/bin/env node

import chalk from 'chalk';

const error = chalk.black.bgRed;
const ok = chalk.green;

console.log(error('error'));

console.log(ok('ok'));
