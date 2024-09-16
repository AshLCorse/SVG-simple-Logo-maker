const Logos = require("../lib/logo.js");

describe("Logos", () => {
  test("should render an SVG file for a logo", () => {
    const text = "Ash's Logo";
    const expectedSVG =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  <circle cx="150" cy="100" r="80" fill="green" />  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    const item = new logo([text], true);
    expect(item.render()).toEqual(expectedSVG);
  });
});
