# document-ready

> Document ready listener for modern browsers


## Install

```
$ npm install --save document-ready
```


## Usage

```js
var ready = require('document-ready')

ready(function () {
  //=> DOM is ready
})
```

## API

#### `ready(callback)` -> `undefined`

##### callback

*Required*  
Type: `function`

A function to call once the DOM has loaded. If the DOM is already loaded, the callback will be called on the next tick.


## License

MIT © [Ben Drucker](http://bendrucker.me)
