import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar/SideBar";
import MediaCard from "../../components/MediaCard/MediaCard";

import { getBookmarks } from "../../services/bookmarkService";
import { setBookmarks } from "../../redux/slices/bookmarkSlice";

function Bookmarks() {
  const bookmarks = useSelector(
    (state) => state.bookmarks.bookmarks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await getBookmarks();

        const formattedBookmarks = response.data.bookmarks.map(
          (movie) => ({
            id: movie.movieId,
            title: movie.title,
            poster_path: movie.poster,
            vote_average: movie.rating,
            _id: movie._id,
          })
        );

        dispatch(setBookmarks(formattedBookmarks));
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookmarks();
  }, [dispatch]);

  return (
    <div className="bg-[#10141E] min-h-screen flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-white text-4xl mb-8">
          Bookmarked Movies
        </h1>

        {bookmarks.length === 0 ? (
          <p className="text-white">
            No bookmarks added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookmarks.map((movie) => (
              <MediaCard
                key={movie.id}
                item={movie}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;