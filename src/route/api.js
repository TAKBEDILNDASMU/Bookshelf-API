const {
  getBookHandler,
  listBookHandler,
  createBookHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("../handler/book-handler")

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: createBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: listBookHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookHandler,
  },
]

module.exports = routes
