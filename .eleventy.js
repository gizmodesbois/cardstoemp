module.exports = (eleventyConfig) => {

  return {
    templateFormats: [
      "md",
      "ejs",
      "css",
      "svg",
      "png",
      "mustache",
    ],
    passthroughFileCopy: true,
  };
};
