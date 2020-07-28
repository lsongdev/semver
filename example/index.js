const semver = require('..');

console.log([
  '4.11.6', '4.2.0',
  '1.5.19', '1.5.5',
  '1.0.0', '1.0.0-rc.1',
  '1.2.3', '1.2.3-alpha',
  '1.0.0-alpha.1', '1.0.0-alpha',
  '1.0.0-beta.11', '1.0.0-beta'
].sort(semver));