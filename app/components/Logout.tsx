"use client";

import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  return (
    <button
      className="flex items-center justify-between rounded-md min-w-fit w-32 px-4 py-2 text-sm font-bold bg-white text-slate-800 focus:outline-none shadow-md hover:text-slate-600 transition-colors duration-150"
      onClick={() => signOut()}
    >
      <span>Logout</span>
      <FaSignOutAlt className="w-4 h-4" />
    </button>
  );
};

export default Logout;
