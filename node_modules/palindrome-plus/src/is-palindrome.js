const cleanup = require('../src/cleanup');

module.exports = (st) => {
    st = cleanup(st);
    if (!st)
        return false;
    return st === st.split('').reverse().join('');
}