const Book = require("../models/bookModel");
const errorHandler = require("../helpers/dbErrorHandler");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(200).json({
      message: "Book Added Successfully!",
      success: true,
      data: newBook,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
      success: false,
    });
  }
};

const list = async (req, res) => {
  try {
    let books = await Book.find().select(
      "id authors description image link title"
    );
    res.json({
      success: true,
      data: books,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const read = async (req, res) => {
  try {
    let book = await Book.findOne({ _id: req.params.bookId }).select("-__v");
    return res.json(book);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    await Book.updateOne(
      { _id: req.params.bookId },
      { $set: req.body },
      { runValidators: true, New: true }
    );
    return res.json({
      success: true,
      message: "Book updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let removedBook = await Book.findOneAndDelete({
      _id: req.params.bookId,
    });
    return res.json(removedBook);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  addBook,
  list,
  read,
  update,
  remove,
};
