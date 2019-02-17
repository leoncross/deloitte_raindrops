var raindrops = require('../src/raindrops.js')

describe('raindrops', function () {
  it('returns a number', function () {
    expect(raindrops(5)).toEqual(5)
  })
  it('returns pling if factor of 3', function () {
    expect(raindrops(3)).toEqual('Pling')
  })
})
