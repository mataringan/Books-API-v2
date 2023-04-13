const express = require("express");
const app = express();

const cors = require("cors");
const imgMemory = require("./middleware/imgMemory");
const cloudinaryUpload = require("./middleware/imgUpload");
const isAdmin = require("./middleware/isAdmin");
const { getAllBooks, getBooksById, createBook } = require("./controllers");

require("dotenv").config();
const PORT = process.env.EX_PORT;

app.use(express.json());
app.use(cors());

// Get All Books
app.get("/v2/books", getAllBooks);

// Get Book by ID
app.get("/v2/books/:id", getBooksById);

// Create Book
app.post(
  "/v2/book",
  isAdmin,
  imgMemory.single("image"),
  cloudinaryUpload,
  createBook
);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
