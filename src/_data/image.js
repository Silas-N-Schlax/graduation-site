const fs = require("fs");
const path = require("path");

const imageDir = path.resolve(__dirname, "../assets/images/"); // Absolute path for reliability

try {
  const images = fs.readdirSync(imageDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      filename: file,
      url: `/assets/images/${file}` // Public URL path for Eleventy
    }));

  // console.log(`✅ Loaded ${images.length} images from ${imageDir}`);
  module.exports = images;
} catch (error) {
  console.error(`❌ Error loading images from ${imageDir}:`, error);
  module.exports = []; // Ensure Eleventy doesn't break if an error occurs
}

