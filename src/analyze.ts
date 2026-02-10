import path from 'path';
import { analyzeProject } from 'project-intel-core';
import { renderSummary } from './renderSummary.js';

export function analyze(pathArg?: string) {
    const rootPath = path.resolve(pathArg ?? process.cwd());

    const result = analyzeProject({
        rootPath,
        limits: {
            maxFiles: 5000,
            maxFileSizeBytes: 500_000,
            maxTotalBytes: 50_000_000,
            maxDirectoryDepth: 20,
            timeoutMs: 10_000,
            allowedExtensions: ['.ts', '.js', '.json', '.md'],
        },
        ignoreDirs: ['node_modules', '.git', 'dist', 'build'],
    });

    renderSummary(result);
}