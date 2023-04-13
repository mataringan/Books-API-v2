const { Books } = require("../models");

const getAllBooks = (req, res) => {
  Books.findAll().then((articles) => {
    res.status(200).json(articles);
  });
};

const getBooksById = (req, res) => {
  Books.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    res.status(200).json(article);
  });
};

module.exports = { getAllBooks, getBooksById };
