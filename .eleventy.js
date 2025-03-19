module.exports = function(eleventyConfig) {
  // Add Passthrough Copy for CSS & JS
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  return {
    dir: {
      input: "src",  // Source folder
      output: "_site", // Output folder
      includes: "_includes" // Includes folder
    }
  };
};