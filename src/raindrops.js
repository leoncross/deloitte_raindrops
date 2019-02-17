function raindrops (n) {
  var string = ''
  if (n % 3 === 0 ) string += 'Pling'
  if (n % 5 === 0 ) string += 'Plang'
  return (string.length === 0) ? n : string;
}

module.exports = raindrops
