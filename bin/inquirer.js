#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        name: 'first_name',
        type: 'input',
        message: 'What is your first name?',
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'What is your last name?',
    },
])
    .then((answer) => {
    console.log('Hello', answer.first_name, answer.last_name);
});
