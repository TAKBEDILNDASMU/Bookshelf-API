const ResponseError = require('../error/errors');

const createBookValidation = (payload) => {
  if (!payload.name) {
    throw new ResponseError('Gagal menambahkan buku. Mohon isi nama buku', 400);
  }

  if (payload.readPage > payload.pageCount) {
    throw new ResponseError('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount', 400);
  }

  return payload;
};

const updateBookValidation = (payload) => {
  if (!payload.name) {
    throw new ResponseError('Gagal memperbarui buku. Mohon isi nama buku', 400);
  }

  if (payload.readPage > payload.pageCount) {
    throw new ResponseError('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount', 400);
  }

  return payload;
};

module.exports = {
  createBookValidation,
  updateBookValidation,
};
