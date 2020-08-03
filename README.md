# semver

> A tiny utility to compare semver strings.

[![Build Status](https://travis-ci.org/song940/semver.svg?branch=master)](https://travis-ci.org/song940/semver)

Compare semver strings (eg, `1.8.2`, `2.0.0-next.6`, `0.0.0-alpha-1`, etc) 

The output will always be `0`, `1`, or `-1`, allowing `semver` to be used directly as a compare function for [`Array.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

## Install

```
$ npm install --save @song940/semver
```

## Usage

```js
import semver from '@song940/semver';

// A === B
semver('0.0.0', '0.0.0'); //=> 0
semver('1.2.3', '1.2.3'); //=> 0

// A > B
semver('2.1.0', '1.9.0'); //=> 1
semver('1.9.1', '1.9.0'); //=> 1
semver('10.0.0', '1.0.0'); //=> 1
semver('10.0.0', '8.9.0'); //=> 1
semver('1.2.3-next.10', '1.2.3-next.6'); //=> 1
semver('2.0.0-alpha-10', '2.0.0-alpha-6'); //=> 1
semver('2.0.0-beta.1', '2.0.0-alpha.8'); //=> 1

// A < B
semver('1.9.0', '2.1.0'); //=> -1
semver('1.9.0', '1.9.1'); //=> -1
semver('1.0.0', '10.0.0'); //=> -1
semver('8.9.0', '10.0.0'); //=> -1
semver('1.2.3-next.6', '1.2.3-next.10'); //=> -1
semver('2.0.0-alpha-6', '2.0.0-alpha-10'); //=> -1
semver('2.0.0-alpha.8', '2.0.0-beta.1'); //=> -1

// Sorting
[
  '4.11.6', '4.2.0',
  '1.5.19', '1.5.5',
  '1.0.0', '1.0.0-rc.1',
  '1.2.3', '1.2.3-alpha',
  '1.0.0-alpha.1', '1.0.0-alpha',
  '1.0.0-beta.11', '1.0.0-beta'
].sort(semver);
/*
  [ '1.0.0-alpha',
    '1.0.0-alpha.1',
    '1.0.0-beta',
    '1.0.0-beta.11',
    '1.0.0-rc.1',
    '1.0.0',
    '1.2.3-alpha',
    '1.2.3',
    '1.5.5',
    '1.5.19',
    '4.2.0',
    '4.11.6' ]
*/
```


## API

### semver(a, b)

Returns: `Number`

* `0` indicates that `a` is equal to `b`
* `-1` indicates that `a` is less than `b`
* `1` indicates that `a` is greater than `b`

#### a
Type: `String`

The input string to compare.

#### b
Type: `String`

The string to compare against.

## License

MIT © [Liu Song](https://lsong.org)
