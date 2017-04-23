# HyperList Component
Wraps [HyperList][1] with [Nanocomponent][2] to allow use as a pureish
component.

## Usage
```javascript
const html = require('bel')
const HyperList = require('hyperlist-component')

const opts = {
  height: 500,
  itemHeight: 30,
  eachItem: (state, index) => html`<li>${state.items[index]}</li>`,
  getTotal: (state) => state.items.length
}
const hyperList = new HyperList('ul', opts)

const ul = hyperList.render({ items: [1, 2, 3] }) // can be called repeatedly
```

[1]: https://github.com/tbranyen/hyperlist/
[2]: https://github.com/yoshuawuyts/nanocomponent/
