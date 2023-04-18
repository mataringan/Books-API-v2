const { Books } = require("../models");
// exports.findAll = ()

module.exports = {
  create(params) {
    return Books.create(params);
  },

  findAll() {
    return Books.findAll();
  },

  find(id) {
    return Books.findByPk(id);
  },
  update(id, params) {
    return Books.update(params, {
      where: { id },
    });
  },
  delete(id) {
    return Books.destroy({
      where: { id },
    });
    // return Books.destroy(id);
  },
};
