#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDirName = process.argv[2] || 'my-groundwork-app';
const targetPath = path.resolve(process.cwd(), targetDirName);
const sourcePath = path.resolve(__dirname, '..');

if (fs.existsSync(targetPath)) {
  const files = fs.readdirSync(targetPath);
  if (files.length > 0) {
    console.error(`Error: Directory ${targetDirName} already exists and is not empty.`);
    process.exit(1);
  }
}

console.log(`Scaffolding Groundwork boilerplate into ${targetDirName}...`);
fs.mkdirSync(targetPath, { recursive: true });

const excludeList = ['node_modules', '.git', 'bin', 'dist', '.npmignore', 'bun.lock'];

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      if (!excludeList.includes(childItemName)) {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      }
    });
  } else {
    // Handle _gitignore -> .gitignore
    const destName = path.basename(dest) === '_gitignore' 
      ? path.join(path.dirname(dest), '.gitignore') 
      : dest;
    fs.copyFileSync(src, destName);
  }
}

copyRecursiveSync(sourcePath, targetPath);

// Clean up package.json
const pkgPath = path.join(targetPath, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  
  // Remove CLI-specific fields
  delete pkg.bin;
  delete pkg.files;
  
  // Update name and version using the absolute folder name
  const projectName = path.basename(targetPath).toLowerCase().replace(/[^a-z0-9-_]/g, '-');
  pkg.name = projectName;
  pkg.version = '0.0.0';
  
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

console.log(`\nSuccess! Groundwork is ready in ${targetDirName === '.' ? 'the current directory' : targetDirName}.`);
console.log(`\nNext steps:`);
console.log(`  cd ${targetDirName}`);
console.log(`  bun install`);
console.log(`  bunx --bun vite\n`);
