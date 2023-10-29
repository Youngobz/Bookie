const mongoose = require("mongoose");
const { reviewSchema } = require("./reviewModel");

const BookSchema = new mongoose.Schema(
  {
    authors: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

module.exports = mongoose.model("Book", BookSchema);
