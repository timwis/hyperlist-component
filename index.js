const Nanocomponent = require('nanocomponent')
const HyperList = require('hyperlist')

class HyperListComponent extends Nanocomponent {
  constructor (tagName, opts) {
    super()
    this._tagName = tagName
    this._opts = opts
  }

  _render (state) {
    this._state = state
    const opts = Object.assign({}, this._opts, {
      generate: (index) => this._opts.eachItem(state, index),
      total: this._opts.getTotal(state)
    })

    if (this._element && this.hyperlist) {
      // Updating existing hyperlist
      this.hyperlist.refresh(this._element, opts)
      return this._element
    } else {
      // initial render
      const container = document.createElement(this._tagName)
      this.hyperlist = HyperList.create(container, opts)
      return container
    }
  }

  _update (newState) {
    return !isEqualShallow(newState, this._state)
  }
}

function isEqualShallow (a, b) {
  const keys = Object.keys(a)
  return keys.every((key) => a[key] === b[key])
}

module.exports = HyperListComponent
