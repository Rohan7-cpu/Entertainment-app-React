import Bookmark from "../models/Bookmark.js";

// Add Bookmark
export const addBookmark = async (req, res) => {
  try {
    const { movieId, title, poster, rating, mediaType } = req.body;

    const bookmark = await Bookmark.create({
  user: req.user._id,
  userName: req.user.name,

  movieId,
  title,
  poster,
  rating,
  mediaType,
});

    res.status(201).json({
      success: true,
      message: "Bookmark Added",
      bookmark,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookmarks
export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      bookmarks,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Bookmark
export const deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Bookmark Deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};