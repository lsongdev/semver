const assert = require('assert');
const semver = require('..');

// A === B
assert.equal(semver('0.0.0', '0.0.0'), 0); //=> 0
assert.equal(semver('1.2.3', '1.2.3'), 0); //=> 0

// A > B
assert.equal(semver('2.1.0', '1.9.0'), 1); //=> 1
assert.equal(semver('1.9.1', '1.9.0'), 1); //=> 1
assert.equal(semver('10.0.0', '1.0.0'), 1); //=> 1
assert.equal(semver('10.0.0', '8.9.0'), 1); //=> 1
assert.equal(semver('1.2.3-next.10', '1.2.3-next.6'), 1); //=> 1
assert.equal(semver('2.0.0-alpha-10', '2.0.0-alpha-6'), 1); //=> 1
assert.equal(semver('2.0.0-beta.1', '2.0.0-alpha.8'), 1); //=> 1

// A < B
assert.equal(semver('1.9.0', '2.1.0'), -1); //=> -1
assert.equal(semver('1.9.0', '1.9.1'), -1); //=> -1
assert.equal(semver('1.0.0', '10.0.0'), -1); //=> -1
assert.equal(semver('8.9.0', '10.0.0'), -1); //=> -1
assert.equal(semver('1.0.0-alpha', '1.0.0'), -1); //=> -1
assert.equal(semver('1.2.3-next.6', '1.2.3-next.10'), -1); //=> -1
assert.equal(semver('2.0.0-alpha-6', '2.0.0-alpha-10'), -1); //=> -1
assert.equal(semver('2.0.0-alpha.8', '2.0.0-beta.1'), -1); //=> -1
assert.equal(semver('1.0.0-alpha', '1.0.0-alpha.1'), -1); //=> -1
assert.equal(semver('1.0.0-alpha', '1.0.0-alpha.1'), -1); //=> -1   
assert.equal(semver('1.0.0-alpha.1', '1.0.0-alpha.beta'), -1); //=> -1   
assert.equal(semver('1.0.0-alpha.beta', '1.0.0-beta'), -1); //=> -1   
assert.equal(semver('1.0.0-beta', '1.0.0-beta.2'), -1); //=> -1   
assert.equal(semver('1.0.0-beta.2', '1.0.0-beta.11'), -1); //=> -1   
assert.equal(semver('1.0.0-beta.11', '1.0.0-rc.1'), -1); //=> -1   
assert.equal(semver('1.0.0-rc.1', '1.0.0'), -1); //=> -1   
