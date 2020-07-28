
const compare = (a, b) => {
  const na = +a;
  const nb = +b;
  a = isNaN(na) ? a : na;
  b = isNaN(nb) ? b : nb;
  if (a === void 0 || (isNaN(nb) && !isNaN(na)) || a < b) return -1;
  if (b === void 0 || (isNaN(na) && !isNaN(nb)) || a > b) return 1;
  return 0;
};

const pre = (a, b) => {
  if (a.length + b.length === 0)
    return 0;
  if (a.length === 0) return 1;
  if (b.length === 0) return -1;
  const len = Math.max(a.length, b.length);
  for (var i = 0; i < len; i++) {
    const r = compare(a[i], b[i]);
    if (r !== 0) return r;
  }
  return 0;
};

/**
 * semver
 * @param {*} a 
 * @param {*} b 
 * @docs https://semver.org/
 */
const semver = (a, b) => {
  a = a.split('.');
  b = b.split('.');
  a[2] = a.splice(2).join('.').split(/[.-]/);
  b[2] = b.splice(2).join('.').split(/[.-]/);
  return compare(a[0], b[0]) || compare(a[1], b[1]) || (
    compare(a[2][0], b[2][0]) || pre(a[2].slice(1), b[2].slice(1))
  );
};

module.exports = semver;