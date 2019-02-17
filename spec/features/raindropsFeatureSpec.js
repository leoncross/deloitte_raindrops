var raindrops = require('../../src/raindrops.js')

describe('raindrops', function () {
  it('returns plong on 28', function () {
    expect(raindrops(28)).toEqual('Plong')
  })
  it('returns plingplang on 30', function () {
    expect(raindrops(30)).toEqual('PlingPlang')
  })
  it('returns 34', function () {
    expect(raindrops(34)).toEqual(34)
  })
  it('returns PlingPlangPlong on 105', function () {
    expect(raindrops(105)).toEqual('PlingPlangPlong')
  })
})
