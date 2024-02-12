#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const error = chalk_1.default.black.bgRed;
const ok = chalk_1.default.green;
console.log(error('error'));
console.log(ok('ok'));
