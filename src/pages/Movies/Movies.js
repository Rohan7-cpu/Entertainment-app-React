import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/SideBar";
import MediaCard from "../../components/MediaCard/MediaCard";

import { getPopularMovies } from "../../services/tmdbApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#10141E] min-h-screen flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-white text-4xl mb-8">
          Movies
        </h1>

        {loading ? (
          <p className="text-white text-lg">
            Loading Movies...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
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

export default Movies;