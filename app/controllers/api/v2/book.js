const bookService = require("../../../services/bookService");

module.exports = {
  list(req, res) {
    bookService
      .list()
      .then((data) => {
        res.status(200).json({
          status: "OK",
          books: data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  getById(req, res) {
    bookService
      .get(req.params.id)
      .then((book) => {
        res.status(200).json({
          status: "OK",
          books: book,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  create(req, res) {
    const url = req.image;
    bookService
      .create({
        title: req.body.title,
        desc: req.body.desc,
        image: url,
        author: req.body.author,
      })
      .then((book) => {
        res.status(201).json({
          status: "Created Success",
          data: book,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    const url = req.image;
    bookService
      .update(req.params.id, {
        title: req.body.title,
        desc: req.body.desc,
        image: url,
        author: req.body.author,
      })
      .then(() => {
        res.status(200).json({
          status: "Update Success",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  //   Books.destroy({ where: { id: req.params.id } }).then(() => {
  //     res.status(200).json("Delete Success");
  //   });
  // },
  delete(req, res) {
    bookService
      .delete(req.params.id)
      .then(() => {
        res.status(200).json("Delete Success");
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
