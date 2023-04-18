// const { Books } = require("../../../models");
const bookService = require("../../../services/bookService");

module.exports = {
  // getAllBooks: (req, res) => {
  //   Books.findAll().then((books) => {
  //     res.status(200).json(books);
  //   });
  // },

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

  // getBooksById: (req, res) => {
  //   Books.findOne({
  //     where: { id: req.params.id },
  //   }).then((article) => {
  //     res.status(200).json(article);
  //   });
  // },

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
  // createBook: (req, res) => {
  //   try {
  //     const url = req.image;
  //     Books.create({
  //       title: req.body.title,
  //       desc: req.body.desc,
  //       image: url,
  //       author: req.body.author,
  //     }).then(() => {
  //       res.status(200).json("Data has ben created");
  //     });
  //   } catch (err) {
  //     res.json({
  //       msg: "Bad request",
  //       status: 400,
  //     });
  //     return;
  //   }
  // },

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
  // updateBook: (req, res) => {
  //   try {
  //     const book = req.book;
  //     const url = req.image || book.image;
  //     Books.update(
  //       {
  //         title: req.body.title,
  //         desc: req.body.desc,
  //         image: url,
  //         author: req.body.author,
  //       },
  //       { where: { id: book.id } }
  //     ).then(() => {
  //       res.status(201).json("Update Success");
  //     });
  //   } catch {
  //     (err) => {
  //       console.log(err);
  //     };
  //   }
  // },

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
  // deleteBook: (req, res) => {
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
