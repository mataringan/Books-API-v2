const express = require("express");
const app = express();
const cors = require("cors");
const imgMemory = require("./middleware/imgMemory.js");
const cloudinaryUpload = require("./middleware/imgUpload.js");
const isAdmin = require("./middleware/isAdmin.js");
const {
  getAllBooks,
  getBooksById,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers");
const checkBook = require("./middleware/checkBook.js");

require("dotenv").config();
const PORT = process.env.EX_PORT;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Get All Books
app.get("/v2/books", getAllBooks);

// Create Book
app.post("/v2/book", imgMemory.single("image"), cloudinaryUpload, createBook);

// Get Book by ID
app.get("/v2/books/:id", getBooksById);

// Update
app.put(
  "/v2/book/:id",
  checkBook,
  isAdmin,
  imgMemory.single("image"),
  cloudinaryUpload,
  updateBook
);

// Delete
app.delete("/v2/book/:id", isAdmin, deleteBook);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
