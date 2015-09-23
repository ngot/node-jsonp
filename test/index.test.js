/*!
 * node-jsonp - test/index.test.js
 * Author:
 *    ngot <zhuanghengfei@gmail.com>
 */

'use strict'

/**
 * Module dependencies.
 */

let JSONP = require('../')
let querystring = require('querystring')

// See http://doc.jsfiddle.net/use/echo.html
let ENDPOINT = 'http://jsfiddle.net/echo/jsonp/'

describe('index.js', function () {
  it('querystring jsonp', function (done) {
    let obj = {
      a: 'a',
      b: 'b'
    }
    let qs = querystring.encode(obj)
    JSONP(ENDPOINT + '?' + qs, function (res) {
      res.should.eql(obj)
      done()
    })
  })

  it('param jsonp', function (done) {
    let obj = {
      a: 'a',
      b: 'b'
    }
    JSONP(ENDPOINT, obj, function (res) {
      res.should.eql(obj)
      done()
    })
  })

  it('method', function (done) {
    let obj = {
      a: 'a',
      b: 'b'
    }
    JSONP(ENDPOINT, obj, 'callback', function (res) {
      res.should.eql(obj)
      done()
    })
  })
})
