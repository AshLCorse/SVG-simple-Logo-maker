const Logo = require("./logo.js");

function createDocument(answers) {
  const width = answers.width;
  const height = answers.height;
  const centerX = answers.centerX;
  const centerY = answers.centerY;
  const radius = answers.radius;
  const color = answers.color;
  const textCenterX = answers.textCenterX;
  const textCenterY = answers.textCenterY;
  const fontSize = answers.fontSize;
  const textColor = answers.textColor;
  const logoText = answers.logoText;

  return `<!DOCTYPE svg>
  <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">

  <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${color}" />

  <text x="${textCenterX}" y="${textCenterY}" font-size="${fontSize}" text-anchor="middle" fill="${textColor}">${logoText}</text>

</svg>
  `;
}

module.exports = { createDocument };
