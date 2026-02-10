#!/usr/bin/env node

import { analyze } from './analyze.js';

const [, , command, pathArg] = process.argv;

if (command !== 'analyze') {
    console.error('Usage: project-intel analyze <path>');
    process.exit(1);
}

analyze(pathArg);