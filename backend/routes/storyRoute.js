const express = require("express");
const router = express.Router();
const books = require("../controller/booksController");
router.post("/getAllBook", books.getAllBook);
router.post("/getBookChapter", books.getBookChapter);
module.exports = router;