"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LoginButton = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center min-h-screen bg-slate-800">
      <h1 className="text-lg text-white font-bold">Welcome to J-Recipe</h1>
      <button
        className="flex items-center justify-between rounded-md min-w-fit w-40 px-4 py-2 text-lg font-bold bg-white text-slate-800 focus:outline-none shadow-md hover:-translate-y-0.5 hover:text-slate-600 transition-all duration-150"
        onClick={() => signIn("google")}
      >
        <span>Login</span>
        <FaGoogle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default LoginButton;
