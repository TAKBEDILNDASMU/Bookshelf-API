const {
  getBookHandler,
  listBookHandler,
  createBookHandler,
  updateBookHandler,
  deleteBookHandler,
  loginBookHandler,
  logoutBookHandler,
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
    method: "GET",
    path: "/login",
    handler: loginBookHandler,
  },
  {
    method: "POST",
    path: "/login",
    handler: loginBookHandler,
  },
  {
    method: "DELETE",
    path: "/delete",
    handler: logoutBookHandler,
  },
]

module.exports = routes
