import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../login/fbConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      route("/");
    } catch (error) {
      console.error("Login Failed:", error.message);
      // setError(error.message);
    }
    // console.log("Email:", email);
    // console.log("Password:", password);
    // setError("");
    route("/")
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" to="/"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Sign Up Links */}
        <div className="text-sm text-center text-gray-500">
          <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
          <span className="mx-2">|</span>
          {/* routee("/signup") */}
          <a href="/signup" className="text-blue-500 hover:underline">Create an account</a>
        </div>
      </div>
    </div>
  );
};


function Loginn() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Loginn;
