const { Books } = require("../../../app/models");

module.exports = {
  getAllBooks: (req, res) => {
    Books.findAll().then((books) => {
      res.status(200).json(books);
    });
  },

  getBooksById: (req, res) => {
    Books.findOne({
      where: { id: req.params.id },
    }).then((article) => {
      res.status(200).json(article);
    });
  },

  createBook: (req, res) => {
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
  },

  updateBook: (req, res) => {
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
  },

  deleteBook: (req, res) => {
    Books.destroy({ where: { id: req.params.id } }).then(() => {
      res.status(200).json("Delete Success");
    });
  },
};
