# typographic-ellipses

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Avoid using periods and spaces][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-ellipses
```


## Usage

```js
var ellipses = require('typographic-ellipses');

ellipses('foo...bar'); // foo…bar
```


## Real world examples

Check complex usage with real world examples in [typography playground][playground].

[playground]: https://github.com/matmuchrapna/typographic-playground


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/ellipses.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-ellipses
[npm-image]: http://img.shields.io/npm/v/typographic-ellipses.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-ellipses
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-ellipses.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-ellipses
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-ellipses.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-ellipses
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-ellipses.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-ellipses
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-ellipses/dev-status.svg
