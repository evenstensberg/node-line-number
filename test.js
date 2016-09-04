const test = require('ava');
const readFile = require('./index').readFile;
const readDir = require('./index').readDir;

test('it should compare two values', t => {
   t.pass(readFile('README.md'))
});
test('it should read a directory', t => {
  t.pass(readDir(process.cwd()))
})
