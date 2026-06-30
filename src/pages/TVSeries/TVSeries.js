import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/SideBar";
import MediaCard from "../../components/MediaCard/MediaCard";

import { getTrendingTVSeries } from "../../services/tmdbApi";

function TVSeries() {
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTVSeries();
  }, []);

  const fetchTVSeries = async () => {
    try {
      const data = await getTrendingTVSeries();
      setTvSeries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#10141E] min-h-screen flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-white text-4xl mb-8">
          TV Series
        </h1>

        {loading ? (
          <p className="text-white">Loading TV Series...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvSeries.map((show) => (
              <MediaCard
                key={show.id}
                item={show}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TVSeries;