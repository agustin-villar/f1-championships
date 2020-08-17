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

/**
* Will return the needed css rules to generate a checkered background
* @param {string} [fgColor=white] - The foreground color
* @param {string} [fgColor=black] - The background color
* @param {Number} [size=24] - The size of the squares in pixels
* @returns {string} CSS rules that will render a checkered background
*/
export function checkeredBackground(fgColor = 'white', bgColor = 'black', size = 24) {
  const halfSize = size * 0.5;
  return `
    background-color: ${fgColor};
    background-image:
      linear-gradient(45deg, ${bgColor} 25%, transparent 25%),
      linear-gradient(135deg, ${bgColor} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${bgColor} 75%),
      linear-gradient(135deg, transparent 75%, ${bgColor} 75%);
    background-position: 0 0, ${halfSize}px 0, ${halfSize}px ${halfSize}px, 0 ${halfSize}px;
    background-size: ${size}px ${size}px;
  `;
}
