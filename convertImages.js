const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const heicConvert = require("heic-convert");

const inputDir = './src/assets/images-original';
const outputDir = './src/assets/images';

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + '.webp');

  const ext = path.extname(file).toLowerCase();

  // Ignore unsupported files like .mp4 and .mov
  if (ext === '.mp4' || ext === '.mov') {
    console.log(`Skipped: ${file}`);
    return;
  }

  // Handle .webp files (copy directly)
  if (ext === '.webp') {
    fs.copyFileSync(inputPath, path.join(outputDir, file));
    console.log(`Copied: ${file}`);
  } 
  // Convert .heic files to .jpeg first, then to .webp
  else if (ext === '.heic') {
    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG', // Convert to JPEG
        quality: 1,
      });

      const tempJpegPath = path.join(outputDir, path.parse(file).name + '.jpeg');
      fs.writeFileSync(tempJpegPath, outputBuffer);

      sharp(tempJpegPath)
        .rotate() // Prevent unintended rotation
        .toFormat('webp')
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted: ${file} -> ${outputPath}`);
          fs.unlinkSync(tempJpegPath); // Clean up temporary file
        })
        .catch(err => console.error(`Error converting ${file}:`, err));
    } catch (err) {
      console.error(`Error converting HEIC file ${file}:`, err);
    }
  } 
  // Convert other supported image formats to .webp
  else if (['.jpg', '.jpeg', '.png', '.tif', '.tiff'].includes(ext)) {
    sharp(inputPath)
      .rotate() // Prevent unintended rotation
      .toFormat('webp')
      .toFile(outputPath)
      .then(() => console.log(`Converted: ${file} -> ${outputPath}`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  } 
  // Log unsupported file types
  else {
    console.log(`Unsupported file type: ${file}`);
  }
});