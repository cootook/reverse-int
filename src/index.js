module.exports = function reverse (n) {
    let aboveZero = 1
    if (n < 0) aboveZero = -1
  return ('' + (n * aboveZero)).split('').reverse().join('') 
}
