#!/usr/bin/env node

import { analyze } from './analyze';

const [, , command, pathArg] = process.argv;

if (command !== 'analyze' || !pathArg) {
    console.error('Usage: project-intel analyze <path>');
    process.exit(1);
}

analyze(pathArg);