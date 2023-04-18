const { Books } = require("../app/models");

const checkBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resData = await Books.findOne({
      where: { id },
    });
    if (!resData) {
      res.status(404).json({
        error: "Book not found!",
      });
      return;
    }

    req.book = resData;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      err_msg: error.message,
    });
  }
};

module.exports = checkBook;
