const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const contentDir = path.resolve(__dirname, "../content/");

try {
  const content = fs.readdirSync(contentDir);

  console.log(`✅ Loaded ${content.length} pages from ${contentDir}`);
  const sortedContent = sortContent(content);
  console.log(sortedContent);
  module.exports = sortedContent;
} catch (error) {
  console.error(`❌ Error loading pages from ${contentDir}:`, error);
  module.exports = [];
}

function sortContent(content) {
  const nestedPages = {};

  content.forEach(file => {
    try {
      const fileContent = fs.readFileSync(path.resolve(contentDir, file), 'utf8');
      const { data } = matter(fileContent);

      if (!data.category || !data.title) {
        console.warn(`⚠️ Missing category or title in file: ${file}`);
        return;
      }

      if (!nestedPages[data.category]) {
        nestedPages[data.category] = [];
      }
      nestedPages[data.category].push({
        filename: file,
        title: data.title,
        url: `/content/${file.split('.').slice(0, -1).join('.')}`,
      });
    } catch (error) {
      console.error(`❌ Error reading or parsing file: ${file}`, error);
    }
  });

  const sortedCategories = Object.keys(nestedPages).sort();

  const sortedNestedPages = {};

  sortedCategories.forEach(category => {
    sortedNestedPages[category] = nestedPages[category].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  });

  return sortedNestedPages;
}
