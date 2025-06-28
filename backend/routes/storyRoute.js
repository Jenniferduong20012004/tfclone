const express = require("express");
const router = express.Router();
const books = require("../controller/booksController");
router.post("/getAllBook", books.getAllBook);
module.exports = router;