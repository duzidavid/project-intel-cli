import { ProjectContext } from 'project-intel-core';

export function renderSummary(ctx: ProjectContext): void {
    console.log('Project Intel — Analysis Summary\n');

    console.log(`Path: ${ctx.meta.rootPath}`);
    console.log(`Files analyzed: ${ctx.meta.fileCount}\n`);

    renderSignals(ctx);
    renderRisks(ctx);
}

function renderSignals(ctx: ProjectContext): void {
    const byKind = groupBy(ctx.signals, (s) => s.kind);

    console.log('Signals:');

    if (byKind.language) {
        console.log(`- Languages: ${uniqueValues(byKind.language)}`);
    }

    if (byKind.runtime) {
        console.log(`- Runtime: ${uniqueValues(byKind.runtime)}`);
    }

    if (byKind.license) {
        console.log(`- License: ${uniqueValues(byKind.license)}`);
    }

    if (byKind.dependency) {
        console.log(`- Dependencies: ${byKind.dependency.length}`);
    }

    console.log('');
}

function renderRisks(ctx: ProjectContext): void {
    console.log('Risks:');

    if (ctx.risks.length === 0) {
        console.log('- None detected\n');
        return;
    }

    for (const risk of ctx.risks) {
        console.log(`- [${risk.severity.toUpperCase()}] ${risk.description}`);
    }

    console.log('');
}

function groupBy<T, K extends string>(
    items: T[],
    key: (item: T) => K,
): Record<K, T[]> {
    return items.reduce((acc, item) => {
        const k = key(item);
        (acc[k] ??= []).push(item);
        return acc;
    }, {} as Record<K, T[]>);
}

function uniqueValues(signals: { value: string }[]): string {
    return [...new Set(signals.map((s) => s.value))].join(', ');
}