var raindrops = require('../src/raindrops.js')

describe('raindrops', function () {
  it('returns a number', function () {
    expect(raindrops(4)).toEqual(4)
  })
  it('returns pling if factor of 3', function () {
    expect(raindrops(3)).toEqual('Pling')
  })
  it('returns plang if factor of 5', function () {
    expect(raindrops(5)).toEqual('Plang')
  })
  it('returns plong if factor of 7', function () {
    expect(raindrops(7)).toEqual('Plong')
  })
})
