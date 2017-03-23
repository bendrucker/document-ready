'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var vm = require('vm')
var fs = require('fs')
var browserify = require('browserify')

test('node', function (t) {
  t.throws(function () {
    vm.runInThisContext(fs.readFileSync(require.resolve('./')))
  }, /runs in the browser/)
  t.end()
})

test('browser', function (t) {
  t.plan(3)

  browserify()
    .require(require.resolve('./'), {
      expose: 'document-ready'
    })
    .bundle(function (err, code) {
      if (err) return t.end(err)

      var document = new EventTarget()
      var context = vm.createContext({
        document,
        setTimeout
      })
      vm.runInContext(code, context)
      var ready = context.require('document-ready')

      ready(() => t.pass('DOMContentLoaded event'))

      document.send('DOMContentLoaded')

      document.readyState = 'complete'
      ready(() => t.pass('readyState = complete'))

      document.readyState = 'interactive'
      ready(() => t.pass('readyState = interactive'))
    })
})
