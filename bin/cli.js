#!/usr/bin/env node

import degit from 'degit';
import fs from 'fs';
import path from 'path';

const REPO = 'tsxr1ck/groundwork';
const targetDirName = process.argv[2] || 'my-groundwork-app';
const targetPath = path.resolve(process.cwd(), targetDirName);

async function main() {
  if (fs.existsSync(targetPath)) {
    const files = fs.readdirSync(targetPath).filter(f => !f.startsWith('.'));
    if (files.length > 0) {
      console.error(`Error: Directory ${targetDirName} already exists and is not empty.`);
      process.exit(1);
    }
  }

  console.log(`Scaffolding Groundwork boilerplate into ${targetDirName}...`);
  fs.mkdirSync(targetPath, { recursive: true });

  const d = degit(REPO, { cache: false, force: true });
  d.on('info', (event) => {
    if (event.message) console.log(`  ${event.message}`);
  });

  try {
    await d.clone(targetPath);
  } catch (err) {
    console.error('Failed to download boilerplate:', err.message);
    process.exit(1);
  }

  // Remove CLI tooling from scaffolded project
  const binDir = path.join(targetPath, 'bin');
  if (fs.existsSync(binDir)) {
    fs.rmSync(binDir, { recursive: true, force: true });
  }

  // Clean up package.json
  const pkgPath = path.join(targetPath, 'package.json');
  const projectName = path.basename(targetPath).toLowerCase().replace(/[^a-z0-9-_]/g, '-');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    delete pkg.bin;
    delete pkg.files;
    pkg.name = projectName;
    pkg.version = '0.0.0';
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }

  // Write a fresh project README
  const readme = `# ${projectName}

Built with [Groundwork](https://github.com/${REPO}).

## Getting Started

\`\`\`bash
bun install
bunx --bun vite
\`\`\`

## Commands

| Command | Description |
| --- | --- |
| \`bunx --bun vite\` | Start the dev server |
| \`bun run build\` | Build for production |
| \`bun run preview\` | Preview the production build |
| \`bun run lint\` | Run ESLint |

## Adding Components

\`\`\`bash
bunx --bun shadcn@latest add [component-name]
\`\`\`
`;
  fs.writeFileSync(path.join(targetPath, 'README.md'), readme);

  console.log(`\nSuccess! Groundwork is ready in ${targetDirName === '.' ? 'the current directory' : targetDirName}.`);
  console.log(`\nNext steps:`);
  if (targetDirName !== '.') {
    console.log(`  cd ${targetDirName}`);
  }
  console.log(`  bun install`);
  console.log(`  bunx --bun vite\n`);
}

main();
