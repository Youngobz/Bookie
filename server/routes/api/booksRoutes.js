const express = require("express");
const bookCtrl = require("../../controllers/bookController");

const router = express.Router();

router.route("/").get(bookCtrl.list).post(bookCtrl.addBook);

router
  .route("/:bookId")
  .get(bookCtrl.read)
  .put(bookCtrl.update)
  .delete(bookCtrl.remove);

router.route("/:bookId/review").post(bookCtrl.createReview);
router.route("/:bookId/review/:reviewId").delete(bookCtrl.deleteReview);

module.exports = router;
