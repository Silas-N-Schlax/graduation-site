const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = './src/assets/images-original';
const outputDir = './src/assets/images';

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + '.webp');

  if (path.extname(file).toLowerCase() === '.webp') {
      fs.copyFileSync(inputPath, path.join(outputDir, file));
      console.log(`Copied: ${file}`);
  } else {
      sharp(inputPath)
          .toFormat('webp')
          .toFile(outputPath)
          .then(() => console.log(`Converted: ${file} -> ${outputPath}`))
          .catch(err => console.error(`Error converting ${file}:`, err));
  }
});