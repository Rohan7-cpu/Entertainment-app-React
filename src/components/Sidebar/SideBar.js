import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const navigate = useNavigate();

  const bookmarks = useSelector(
    (state) => state.bookmarks.bookmarks
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 flex flex-col justify-between">

      {/* Top Section */}
      <div>

        <h1 className="text-4xl font-bold text-red-500 mb-12">
          🎬
        </h1>

        <div className="flex flex-col gap-6 text-lg">

          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "hover:text-red-500"
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "hover:text-red-500"
            }
          >
            🎥 Movies
          </NavLink>

          <NavLink
            to="/tv-series"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "hover:text-red-500"
            }
          >
            📺 TV Series
          </NavLink>

          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "hover:text-red-500"
            }
          >
            ⭐ Bookmarks ({bookmarks.length})
          </NavLink>

        </div>

      </div>

      {/* Bottom Section */}
      <div>

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>

            <p className="text-sm text-gray-400">
              Welcome
            </p>

            <p className="font-semibold">
              {user?.name}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;