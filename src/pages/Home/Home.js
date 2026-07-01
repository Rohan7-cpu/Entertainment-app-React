import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import MediaCard from "../../components/MediaCard/MediaCard";

import {
  getTrendingMovies,
  searchMovies,
} from "../../services/tmdbApi";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (search.trim() === "") {
          const data = await getTrendingMovies();
          setMovies(data);
        } else {
          const data = await searchMovies(search);

          const filtered = data.filter(
            (item) =>
              item.media_type === "movie" ||
              item.media_type === "tv"
          );

          setMovies(filtered);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="bg-[#10141E] min-h-screen flex">
      <Sidebar />

      <main className="ml-64 flex-1 p-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <h1 className="text-white text-4xl font-light mt-8 mb-8">
          {search ? "Search Results" : "Trending Movies"}
        </h1>

        {loading ? (
          <div className="text-white text-xl">
            Loading movies...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MediaCard
                key={movie.id}
                item={movie}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;