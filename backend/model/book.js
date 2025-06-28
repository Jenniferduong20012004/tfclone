const fs = require('fs');
const path = require('path');

class book {
  static getBookChapter(id, callback) {
    const folderPath = path.join(__dirname, '..', 'db', String(id)); // path to folder with chapters
    const filesData = [];

    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading folder:', err);
        callback(err, null);
        return;
      }

      const txtFiles = files.filter(file => file.endsWith('.txt'));

      txtFiles.forEach(file => {
        const chapterId = path.basename(file, '.txt');
        const chapterPath = path.join(folderPath, file);

        const content = fs.readFileSync(chapterPath, 'utf8'); // Can make async if needed
        filesData.push({ id: chapterId, content });
      });
      console.log (filesData)

      callback(null, filesData); // return results
    });
  }

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