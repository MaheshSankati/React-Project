// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../login/fbConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const Signup = () => {
//   const route = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Signup Successful!");
//       route("/login");
//     } catch (error) {
//       console.error("Signup Failed:", error.message);
//       setError(error.message);
//     }
//     setError(""); // Clear error if successful
//     // route("/login");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Confirm Password Input */}
//           <div>
//             <label className="block text-gray-600 text-sm font-medium">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             href="/login"
//             className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Login Link */}
//         <div className="text-sm text-center text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-500 hover:underline">
//             Already have an account? Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../login/fbConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful! Redirecting to Login...");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login.");
      } else {
        setError("Signup failed. Please try again.");
      }
      console.error("Signup Failed:", error.message);
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
