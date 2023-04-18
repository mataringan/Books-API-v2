const express = require("express");
const app = express();
const cors = require("cors");
const imgMemory = require("../middleware/imgMemory.js");
const cloudinaryUpload = require("../middleware/imgUpload.js");
const isAdmin = require("../middleware/isAdmin.js");
const checkBook = require("../middleware/checkBook.js");
const controllers = require("../app/controllers");
const appRouter = express.Router();
const apiRouter = express.Router();

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Get All Books

apiRouter.get("/v2/books", controllers.api.v2.book.list);

// Create Book
apiRouter.post(
  "/v2/book",
  imgMemory.single("image"),
  cloudinaryUpload,
  controllers.api.v2.book.create
);

// Get Book by ID
apiRouter.get("/v2/books/:id", controllers.api.v2.book.getById);

// Update

apiRouter.put(
  "/v2/book/:id",
  checkBook,
  isAdmin,
  imgMemory.single("image"),
  cloudinaryUpload,
  controllers.api.v2.book.update
);

apiRouter.delete("/v2/book/:id", isAdmin, controllers.api.v2.book.delete);

appRouter.use(apiRouter);

module.exports = appRouter;
