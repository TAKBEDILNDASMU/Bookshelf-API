const {
  createBookService,
  listBookService,
  getBookService,
  updateBookService,
  deleteBookService,
} = require('../service/book-service');
const {
  createBookValidation,
  updateBookValidation,
} = require('../validation/book-validation');

const createBookHandler = (req, h) => {
  try {
    const createRequest = createBookValidation(req.payload);
    const result = createBookService(createRequest);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: result,
      },
    });

    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });

    response.code(error.statusCode);
    return response;
  }
};

const listBookHandler = (req, h) => {
  try {
    const { query } = req;
    const result = listBookService(query);
    const response = h.response({
      status: 'success',
      data: {
        books: result,
      },
    });

    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });

    response.code(error.statusCode);
    return response;
  }
};

const getBookHandler = (req, h) => {
  try {
    const { bookId } = req.params;

    const result = getBookService(bookId);

    const response = h.response({
      status: 'success',
      data: {
        book: result,
      },
    });

    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });

    response.code(error.statusCode);
    return response;
  }
};

const updateBookHandler = (req, h) => {
  try {
    const updateRequest = updateBookValidation(req.payload);
    const { bookId } = req.params;
    const result = updateBookService(updateRequest, bookId);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
      book: result,
    });

    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });

    response.code(error.statusCode);
    return response;
  }
};

const deleteBookHandler = (req, h) => {
  try {
    // get bookId from path parameter and use it to find the book from booksArray array
    const { bookId } = req.params;
    deleteBookService(bookId);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });

    response.code(error.statusCode);
    return response;
  }
};

module.exports = {
  createBookHandler,
  listBookHandler,
  getBookHandler,
  updateBookHandler,
  deleteBookHandler,
};
