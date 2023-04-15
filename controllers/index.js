const createBook = require("./createBook");
const deleteBook = require("./deleteBook");
const { getAllBooks, getBooksById } = require("./getBook");
const updateBook = require("./updateBook");
updateBook;

module.exports = {
  getAllBooks,
  getBooksById,
  createBook,
  updateBook,
  deleteBook,
};
