# :octocat: [node-line-number](https://github.com/ev1stensberg/node-line-number) :octocat:
[![NPM](https://nodei.co/npm/node-line-number.png)](https://npmjs.org/package/node-line-number)

**Get the current line number in &lt;mode> format for each line in your directory or file**

##Installation

`npm install --save node-line-number`

###Problem

Using `readline` in Node doesn't let you know what the current line number is. Using options, where you include `start` and `end` won't help you anything at all, as node measures lines in number of characters and not editor lines. This module doesn't return or output the result, as the stream returns `undefined`, but it logs the line number and number of character of each line.

##Example 

###ReadFile

```js
const readFile = require('node-line-number').readFile

readFile('example.js')
// outputs for example [ 1: { 4 }, 2: { 1 }, ... ]
```

###ReadDir

```js
const readDir = require('node-line-number').readDir

readDir('build')
// outputs for example [ 1: { 4 }, 2: { 1 }, ... ], but many times
```
