import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
  {
    userName: {
    type: String,
    required: true,
   },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    mediaType: {
      type: String,
      default: "movie",
    },
  },
  {
    timestamps: true,
  }
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;