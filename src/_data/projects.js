const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const contentDir = path.resolve(__dirname, "../content/");
const contentDir2 = path.resolve(__dirname, "../The-Story-So-Far/")

try {
  const content = fs.readdirSync(contentDir);
  const content2 = fs.readdirSync(contentDir2);


  // console.log(`✅ Loaded ${content.length} pages from ${contentDir}`);
  const sortedContent = sortContent(content, contentDir, "content/");
  const sortedContent2 = sortContent(content2, contentDir2, "The-Story-So-Far/");
  //move preface from last to first
  const category = sortedContent2["The Story So Far"];
  const preface = category.pop();
  category.unshift(preface);
  
  const allSortedContent = { ...sortedContent2, ...sortedContent };
  // console.log(allSortedContent);
  module.exports = allSortedContent;
} catch (error) {
  console.error(`❌ Error loading pages from ${contentDir}:`, error);
  module.exports = [];
}

function sortContent(content, contentDir, url) {
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
        url: `/${url}${file.split('.').slice(0, -1).join('.')}`,
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
