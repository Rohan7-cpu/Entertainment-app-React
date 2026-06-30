import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      return alert("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await registerUser({
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#10141E] flex justify-center items-center">

      <div className="bg-[#161D2F] p-8 rounded-xl w-[400px]">

        <h1 className="text-white text-3xl mb-8">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-gray-600 text-white p-3 mb-4 outline-none"
        />

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
          className="w-full bg-transparent border-b border-gray-600 text-white p-3 mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Repeat Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full bg-transparent border-b border-gray-600 text-white p-3 mb-6 outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
        >
          Create Account
        </button>

        <p className="text-white text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-red-500 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;