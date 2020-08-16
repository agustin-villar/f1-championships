/**
* Will return spacing dimensions based on the 8pt grid system
* @param {Number} ratio - The number of times 8 should be multiplied by
* @returns {string} The desired dimension in pixels
*/
export const getSpacing = ratio => `${ratio * 8}px`;

/**
* Will return font sizes from pixel to rem units
* @param {Number} size - The desired font size in pixels
* @param {Number} base - The base size in which measures should be calculated
* @returns {String} The desired dimension in pixels
*/
export const getFontSize = (size, base = 16) => `${size / base}rem`;