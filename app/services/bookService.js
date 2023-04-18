const bookRepository = require("../repositories/bookRepository");

module.exports = {
  create(params) {
    return bookRepository.create(params);
  },

  update(id, params) {
    return bookRepository.update(id, params);
  },

  delete(id) {
    return bookRepository.delete(id);
  },
  async list() {
    try {
      const books = await bookRepository.findAll();
      //   return {
      //     data: books,
      //   };
      return books;
    } catch (error) {
      console.log(error);
    }
  },
  async get(id) {
    return await bookRepository.find(id);
  },
};
