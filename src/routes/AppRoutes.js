import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import TVSeries from "../pages/TVSeries/TVSeries";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Splash from "../pages/Splash/Splash";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

         {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tv-series"
          element={
            <ProtectedRoute>
              <TVSeries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;