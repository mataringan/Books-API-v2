const router = require("../config/routes");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "./views");
const app = express();

app.use(express.json());

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Install view engine */
app.set("views", viewsDir);
app.set("view engine");

/** Install express-session */
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: process.env.COOKIE_SECRET || "Rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

/** Set Public Directory */
app.use(express.static(publicDir));

app.use(router);

module.exports = app;
