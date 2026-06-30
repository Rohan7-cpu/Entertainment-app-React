import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addBookmark as addBookmarkRedux,
  removeBookmark as removeBookmarkRedux,
} from "../../redux/slices/bookmarkSlice";

import {
  addBookmark as addBookmarkAPI,
  deleteBookmark as deleteBookmarkAPI,
} from "../../services/bookmarkService";

function MediaCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bookmarks = useSelector(
    (state) => state.bookmarks.bookmarks
  );

  const isBookmarked = bookmarks.some(
    (movie) => movie.id === item.id
  );

 const handleBookmark = async (e) => {
  e.stopPropagation();

  try {
    if (isBookmarked) {
      const bookmark = bookmarks.find(
        (movie) => movie.id === item.id
      );

      if (bookmark?._id) {
        await deleteBookmarkAPI(bookmark._id);
      }

      dispatch(removeBookmarkRedux(item.id));

    } else {
      await addBookmarkAPI({
        movieId: item.id,
        title: item.title || item.name,
        poster: item.poster_path,
        rating: item.vote_average,
        mediaType: item.media_type || "movie",
      });

      dispatch(addBookmarkRedux(item));
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div
      onClick={() => navigate(`/movie/${item.id}`)}
      className="
        bg-slate-900
        rounded-xl
        overflow-hidden
        hover:scale-105
        transition
        duration-300
        cursor-pointer
        relative
      "
    >
      <button
        onClick={handleBookmark}
        className="
          absolute
          top-3
          right-3
          bg-black/70
          text-white
          px-3
          py-1
          rounded-full
        "
      >
        {isBookmarked ? "⭐" : "☆"}
      </button>

      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title || item.name}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-3">
        <h3 className="text-white font-semibold">
          {item.title || item.name}
        </h3>

        <p className="text-gray-400 text-sm">
          ⭐ {item.vote_average}
        </p>
      </div>
    </div>
  );
}

export default MediaCard;