var express = require("express");
var router = express.Router();

/* GET books listing. */
router.get("/", (req, res) => {
  let booksCollection = [{ title: "A Book" }, { title: "Another Book" }];
  res.json({ books: booksCollection });
});

module.exports = router;
