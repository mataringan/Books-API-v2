const { Books } = require("../models");

const deleteBook = (req, res) => {
  Books.destroy({ where: { id: req.params.id } }).then(() => {
    res.status(200).json("Delete Success");
  });
};

module.exports = deleteBook;
