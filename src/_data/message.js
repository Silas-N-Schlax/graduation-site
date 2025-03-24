const fs = require("fs");
const path = require("path");

const messagesFile = path.resolve(__dirname, "../assets/files/messages.json");



try {
  const messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));

  // console.log(`✅ Loaded ${messages.length} messages from ${messagesFile}`);
  // console.log(messages);
  module.exports = messages;
} catch (error) {
  console.error(`❌ Error loading messages from ${messagesFile}:`, error);
  module.exports = [];
}