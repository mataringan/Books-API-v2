const isAdmin = (req, res, next) => {
  if (req.query.iam === "admin") {
    next();
    return;
  }
  res.status(401).send("Kamu bukan Admin");
};

module.exports = isAdmin;
