import React from "react";
import loginGraphic from "../assets/images/Login_bg.jpg"; // Ensure image is placed in /src/assets

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-gradient-to-tr from-[#5f4b8b] to-[#7c6ccf] font-sans">

            {/* Left Image Section */}
            <div className="w-1/2 flex items-center justify-center p-10">
                <img src={loginGraphic} alt="Stock Market" className="max-w-full h-auto" />
            </div>

            {/* Right Login Card */}
            <div className="w-1/2 flex items-center justify-center bg-white rounded-l-3xl shadow-2xl">
                <div className="w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-sm text-purple-600 mb-6">Your Wealth Bridge</p>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Customer ID"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold hover:from-purple-600 hover:to-purple-800"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-center text-gray-600">
                        <a href="#" className="hover:text-purple-600 mr-2">User</a>|
                        <a href="#" className="hover:text-purple-600 ml-2">Relationship Manager</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
