const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./booksRoutes");
const paymentRoutes = require("./paymentRoutes");

router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/payment", paymentRoutes);

module.exports = router;
