"use client";

import { useState } from "react";

import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (name: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (recipe.trim() !== "") {
      onSearch(recipe);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-full shadow-lg bg-white max-w-lg p-1 overflow-hidden w-full"
    >
      <FaSearch className="w-5 h-5 ml-3 text-slate-400" />
      <input
        className="flex-1 border-none focus:outline-none px-4 text-slate-600 placeholder:text-slate-400"
        type="text"
        name="recipe"
        id="recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Search here ..."
      />
      <button
        type="submit"
        className="rounded-full shadow-sm shadow-slate-600 text-slate-600 px-4 py-2 font-bold focus:outline-none hover:text-slate-400 duration-150 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
