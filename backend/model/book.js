const fs = require('fs');
const path = require('path');

class book {
 static getBooks(callback) {
  const filePath = path.join(__dirname, '..','db', 'BookDescription.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err); // Pass error to callback
    }

    const books = [];

fileContent.split('\n').forEach((line) => {
  const [id, name] = line.split(':').map(part => part.trim());
  if (id && name) {
    books.push({ id, name });
  }
});
    console.log (books)

    callback(null, books); // Call the callback with the result
  });
}
  
}

module.exports = book;