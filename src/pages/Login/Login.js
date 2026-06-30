import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/home");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#10141E] flex justify-center items-center">

      <div className="bg-[#161D2F] p-8 rounded-xl w-[400px]">

        <h1 className="text-white text-3xl mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-gray-600 text-white p-3 mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent border-b border-gray-600 text-white p-3 mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
        >
          Login to your account
        </button>

        <p className="text-white text-center mt-6">
          Don't have an account?

          <Link
            to="/signup"
            className="text-red-500 ml-2"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;