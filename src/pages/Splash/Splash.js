import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/login");
      } else {
        navigate("/home");
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#10141E] min-h-screen flex justify-center items-center">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-red-600">
          ENTERTAINMENT
        </h1>

        <p className="text-white mt-4 text-lg">
          Loading...
        </p>

      </div>
    </div>
  );
}

export default Splash;