function raindrops (n) {
  var string = ''
  if (n % 3 === 0 ) string += 'Pling'
  return (string.length === 0) ? n : string;
}

module.exports = raindrops
