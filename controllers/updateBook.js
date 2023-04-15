const { Books } = require("../models");

const updateBook = (req, res) => {
  try {
    const book = req.book;
    const url = req.image || book.image;

    Books.update(
      {
        title: req.body.title,
        desc: req.body.desc,
        image: url,
        author: req.body.author,
      },
      { where: { id: book.id } }
    ).then(() => {
      res.status(201).json("Update Success");
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

module.exports = updateBook;
