const { nanoid } = require('nanoid');
const books = require('../data/books');
const ResponseError = require('../error/errors');

const createBookService = (request) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: readPage === pageCount,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  return newBook.id;
};

const listBookService = ({ name, reading, finished }) => {
  let filteredBooks = [...books];
  if (name) {
    filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading !== undefined) {
    const readingValue = reading === '1';
    filteredBooks = filteredBooks.filter((book) => book.reading === readingValue);
  }

  if (finished !== undefined) {
    const finishedValue = finished === '1';
    filteredBooks = filteredBooks.filter((book) => book.finished === finishedValue);
  }

  const listBook = filteredBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return listBook;
};

const checkBookMustExist = (bookId, message) => {
  const bookRecord = books.filter((book) => book.id === bookId);

  if (bookRecord.length < 1) {
    throw new ResponseError(message, 404);
  }

  return bookRecord[0];
};

const getBookService = (bookId) => {
  const result = checkBookMustExist(bookId, 'Buku tidak ditemukan');

  return result;
};

const updateBookService = (request, bookId) => {
  checkBookMustExist(bookId, 'Gagal memperbarui buku. Id tidak ditemukan');

  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request;
  const updatedAt = new Date().toISOString();

  const getBookIndex = books.findIndex((book) => book.id === bookId);
  books[getBookIndex] = {
    ...books[getBookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt,
  };

  return books[getBookIndex];
};

const deleteBookService = (bookId) => {
  checkBookMustExist(bookId, 'Buku gagal dihapus. Id tidak ditemukan');

  const getBookIndex = books.findIndex((book) => book.id === bookId);
  books.splice(getBookIndex, 1);
};

module.exports = {
  createBookService,
  listBookService,
  getBookService,
  updateBookService,
  deleteBookService,
};
