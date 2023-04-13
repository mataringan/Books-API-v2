require("dotenv").config();

const isAdmin = (req, res, next) => {
  if (req.query.iam === process.env.IS_ADMIN) {
    next();
    return;
  }
  res.status(401).send("Kamu bukan Admin");
};

module.exports = isAdmin;
