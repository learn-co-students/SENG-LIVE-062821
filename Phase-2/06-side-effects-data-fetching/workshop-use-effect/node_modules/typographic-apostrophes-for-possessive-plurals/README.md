# typographic-apostrophes-for-possessive-plurals

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Make sure they’re curly and point downward][rtfm] even for possessive plurals

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```
npm install --save typographic-apostrophes-for-possessive-plurals
```


## Usage

This module gives you typographic apostrophes for posessive plurals and only. Because it’s impossible to distinguish apostrophes from single closing quote, I asume zero closing quotes in input text, so it's safe to make `"s' "→"s’ "` replacement. To achieve zero closing quotes in input use [apostrophes][apostrophes] and [quotes][quotes] typographic modules before this one.

[apostrophes]: https://www.npmjs.com/package/typographic-apostrophes
[quotes]: https://www.npmjs.com/package/typographic-quotes

```js
var apostrophesForPlurals = require('typographic-apostrophes-for-possessive-plurals');

apostrophesForPlurals(`My sisters' friends' investments`);
                    // My sisters’ friends’ investments
```

## Real world examples

Check complex usage with real world examples in [typography playground][playground].

[playground]: https://github.com/matmuchrapna/typographic-playground

## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: practicaltypography.com/apostrophes.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-apostrophes-for-possessive-plurals
[npm-image]: http://img.shields.io/npm/v/typographic-apostrophes-for-possessive-plurals.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-apostrophes-for-possessive-plurals
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-apostrophes-for-possessive-plurals.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-apostrophes-for-possessive-plurals
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-apostrophes-for-possessive-plurals.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-apostrophes-for-possessive-plurals
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-apostrophes-for-possessive-plurals.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-apostrophes-for-possessive-plurals
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-apostrophes-for-possessive-plurals/dev-status.svg
