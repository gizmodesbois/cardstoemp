module.exports = (eleventyConfig) => {

  return {
    templateFormats: [
      "md",
      "ejs",
      "css",
      "svg",
      "gif",
      "png",
      "mustache",
    ],
    passthroughFileCopy: true,
  };
};
