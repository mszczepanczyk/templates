#!/usr/bin/env -S npx tsx

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function getTemplates() {
  return fs.readdirSync(path.join(import.meta.dirname, 'templates'));
}

function usage() {
  console.log('Usage: npx @mariusz.sh/templates@latest <template> <pkg-name>');
  console.log(`Available templates: ${getTemplates().join(', ')}`);
}

function main() {
  if (process.argv.length != 4) {
    usage();
    process.exit(1);
  }

  const template = process.argv[2];
  const templateDir = path.resolve(import.meta.dirname, 'templates', template);
  if (!fs.existsSync(templateDir)) {
    console.error(`Template ${template} not found`);
    process.exit(1);
  }

  const pkgName = process.argv[3];
  const projectDir = path.resolve(process.cwd(), path.basename(pkgName));

  if (fs.existsSync(projectDir)) {
    console.error(`Directory ${projectDir} already exists`);
    process.exit(1);
  }

  console.log(`Creating directory ${projectDir}...`);
  fs.mkdirSync(projectDir, { recursive: true });

  console.log(`Copying template ${template} to ${projectDir}...`);
  fs.cpSync(templateDir, projectDir, { recursive: true });

  console.log('Replacing placeholders...');
  execSync(`find ${projectDir} -type f -print0 | xargs -0 sed -i '' -e 's#__PKG_NAME__#${pkgName}#g'`);

  console.log('Done!');
}

main();
