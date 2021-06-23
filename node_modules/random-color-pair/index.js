const randomColor = require('randomcolor')

/**
 * Generate two random colors: one darker and one lighter.
 *
 * @module
 * @function
 * @returns {ColorPair} A foreground color and a background color.
 */
module.exports = function getColorPair () {
  const isForegroundDark = Math.random() < 0.5
  const foregroundColor = randomColor({
    luminosity: isForegroundDark ? 'dark' : 'light'
  })
  const backgroundColor = randomColor({
    luminosity: isForegroundDark ? 'light' : 'dark'
  })
  return [foregroundColor, backgroundColor]
}

/**
 * @typedef ColorPair
 * @type {Object}
 * @property {HexColor} foregroundColor The foreground color.
 * @property {HexColor} backgroundColor The background color.
 */

/**
 * A string representing a hexidecimal color starting with #.
 *
 * @typedef HexColor
 * @type {string}
 * @example
 *      #000000
 */
