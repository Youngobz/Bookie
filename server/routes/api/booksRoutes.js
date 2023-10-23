const express = require("express");
const bookCtrl = require("../../controllers/bookController");
const authCtrl = require("../../controllers/authController");

const router = express.Router();

router.route("/").get(bookCtrl.list).post(bookCtrl.addBook);

router
  .route("/:bookId")
  .get(bookCtrl.read)
  .put(bookCtrl.update)
  .delete(bookCtrl.remove);

module.exports = router;
