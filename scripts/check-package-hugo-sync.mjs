#!/usr/bin/env node

import { readFileSync } from 'node:fs';

const SOURCE_PACKAGE = 'package.json';
const HUGO_PACKAGE = 'package.hugo.json';

const DEPENDENCY_FIELDS = [
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'optionalDependencies',
];

// Dependencies that are useful only for this repository's local workflow should
// stay out of package.hugo.json, which is consumed by downstream Hugo sites.
const PACKAGE_JSON_ONLY = {
  devDependencies: new Set(['portless', 'wrangler']),
};

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    console.error(`Failed to read ${path}: ${error.message}`);
    process.exit(1);
  }
}

function sortedEntries(record = {}) {
  return Object.entries(record).sort(([left], [right]) => left.localeCompare(right));
}

function dependencyMap(packageJson, field, omittedDependencies = new Set()) {
  return new Map(
    sortedEntries(packageJson[field] ?? {}).filter(
      ([dependency]) => !omittedDependencies.has(dependency),
    ),
  );
}

function compareDependencyField(field, expected, actual) {
  const errors = [];

  for (const [dependency, version] of expected) {
    if (!actual.has(dependency)) {
      errors.push(`- ${field}: missing ${dependency}@${version} from ${HUGO_PACKAGE}`);
      continue;
    }

    if (actual.get(dependency) !== version) {
      errors.push(
        `- ${field}: ${dependency} is ${actual.get(dependency)} in ${HUGO_PACKAGE}, expected ${version}`,
      );
    }
  }

  for (const [dependency, version] of actual) {
    if (!expected.has(dependency)) {
      errors.push(`- ${field}: extra ${dependency}@${version} in ${HUGO_PACKAGE}`);
    }
  }

  return errors;
}

const packageJson = readJson(SOURCE_PACKAGE);
const hugoPackageJson = readJson(HUGO_PACKAGE);
const errors = [];

for (const field of DEPENDENCY_FIELDS) {
  const expected = dependencyMap(packageJson, field, PACKAGE_JSON_ONLY[field]);
  const actual = dependencyMap(hugoPackageJson, field);

  errors.push(...compareDependencyField(field, expected, actual));
}

if (errors.length > 0) {
  console.error(`${HUGO_PACKAGE} is not in sync with ${SOURCE_PACKAGE}:`);
  console.error(errors.join('\n'));
  console.error(
    `\nOnly dependency fields are checked. Scripts and other package metadata are ignored.`,
  );
  process.exit(1);
}

console.log(`${HUGO_PACKAGE} dependency fields are in sync with ${SOURCE_PACKAGE}.`);
