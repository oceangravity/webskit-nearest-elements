# WebsKit nearest/furthest Element

## About

Get the nearest and furthest DOM element regarding mouse position.

## Demo

WIP

## Examples

```JavaScript
  const lib = require('webskit-nearest-elements');
  const nearest = lib.getNearestAndFurthestElements(document.querySelectorAll('div'), 100, 100);
  console.log(JSON.stringify(nearest, null, 2));
```

Results in:

WIP

## Install Choices
- `npm i webskit-nearest-element`

## License

(The MIT License)

Copyright (c) 2020 Juan Carlos Galindo Navarro ~ webskit.io

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
