const { Schema, model, Types } = require("mongoose");

const moment = require("moment");

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: false,
      maxlength: 280,
    },
    rating: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Review = model("Review", reviewSchema);
module.exports = {
  Review,
  reviewSchema: reviewSchema,
};
