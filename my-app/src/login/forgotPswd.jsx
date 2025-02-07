// import React, { useState } from 'react';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate password reset request
//     setMessage(`A password reset link has been sent to ${email}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
//         <p className="text-gray-600 text-center mb-4">Enter your email to receive a reset link</p>
        
//         {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Email Address</label>
//             <input 
//               type="email" 
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//               placeholder="Enter your email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;




import React, { useState } from "react";
import { auth } from "../login/fbConfig"  // Import Firebase auth
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset link sent! Check your email.");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleReset}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Send Reset Link
                    </button>
                </form>
                {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
