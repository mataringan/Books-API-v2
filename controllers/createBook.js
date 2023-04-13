const { Books } = require("../models");

const createBook = (req, res) => {
  try {
    const url = req.image;
    Books.create({
      title: req.body.title,
      desc: req.body.desc,
      image: url,
      author: req.body.author,
    }).then(() => {
      res.status(200).json("Data has ben created");
    });
  } catch (err) {
    res.json({
      msg: "Bad request",
      status: 400,
    });
    return;
  }
};

module.exports = createBook;
