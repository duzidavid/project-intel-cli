# Project Intel CLI

Project Intel CLI is a command-line tool for analyzing software projects.

It scans a project directory, extracts **deterministic signals** (facts), and derives **potential risks** using the Project Intel Core engine.

This tool is intended for developers who want a quick, structured overview of a codebase.

---

## Features

- Analyze any local project directory
- Detect languages, runtime, license, dependencies, and configuration
- Identify potential legal and maintainability risks
- Human-readable summary output
- Deterministic, reproducible results
- No AI, no cloud, no data upload

---

## Installation

### Global installation

```bash
npm install -g project-intel-cli
```

### Local (project) installation

```bash
npm install --save-dev project-intel-cli
```

### Usage
Analyze the current directory:
```bash
project-intel analyze .
```
Analyze a specific path:
```bash
project-intel analyze /path/to/project
```

### Example Output

```txt
Project Intel — Analysis Summary

Path: /Users/david/projects/example
Files analyzed: 42

Signals:
- Languages: TypeScript, JavaScript
- Runtime: Node.js
- License: ISC
- Dependencies: 12

Risks:
- [MEDIUM] Project has a high number of dependencies (12)
```

### What this tool does NOT do
```txt
•	No AI explanations or recommendations
•	No code modification
•	No remote access or telemetry
•	No opinionated best practices

Interpretation of the results is intentionally left to the user or higher-level tools.
```


### Architecture
```txt
This CLI is a thin wrapper around:
•	project-intel-core — deterministic analysis engine

The CLI defines defaults and presentation.
The core engine performs all analysis.
```

### Licence

MIT