import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getMovieDetails,
  getMovieVideos,
} from "../../services/tmdbApi";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);

        const videos = await getMovieVideos(id);

        const officialTrailer = videos.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" ||
              video.type === "Teaser")
        );

        if (officialTrailer) {
          setTrailer(officialTrailer.key);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="bg-[#10141E] min-h-screen flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#10141E] min-h-screen text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="bg-red-500 px-5 py-2 rounded mb-8"
      >
        Back
      </button>

      <div className="flex gap-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[350px] rounded-xl"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-yellow-400 text-xl mb-4">
            ⭐ {movie.vote_average}
          </p>

          <p className="mb-4">
            Release Date: {movie.release_date}
          </p>

          <p className="mb-4">
            Runtime: {movie.runtime} mins
          </p>

          <div className="flex gap-3 mb-6">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-slate-700 px-3 py-1 rounded"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h2 className="text-2xl mb-3">
            Overview
          </h2>

          <p className="leading-8 text-gray-300">
            {movie.overview}
          </p>

          {trailer ? (
            <div className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">
                Trailer
              </h2>

              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Movie Trailer"
                allowFullScreen
                className="rounded-xl"
              />
            </div>
          ) : (
            <p className="text-gray-400 mt-8">
              Trailer not available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;