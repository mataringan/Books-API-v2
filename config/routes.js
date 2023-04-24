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

appRouter.get(
  "/",
  controllers.authController.authorizedOnly,
  controllers.mainController.index
);
appRouter.get(
  "/login",
  controllers.authController.publicOnly,
  controllers.mainController.login
);
appRouter.post(
  "/login",
  controllers.authController.publicOnly,
  controllers.authController.login
);
appRouter.get(
  "/logout",
  controllers.authController.authorizedOnly,
  controllers.authController.logout
);

/**
 * Authentication Resource
 * */
apiRouter.get(
  "/api/v2/whoami",
  controllers.api.v2.authController.authorize,
  controllers.api.v2.authController.whoAmI
);
apiRouter.post("/api/v2/login", controllers.api.v2.authController.login);
apiRouter.post("/api/v2/register", controllers.api.v2.authController.register);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

appRouter.use(apiRouter);

module.exports = appRouter;
