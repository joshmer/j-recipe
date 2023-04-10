import { FaUtensils } from "react-icons/fa";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

const HomePage = () => {
  return (
    <div className="bg-slate-800 text-white h-screen">
      <Header />
      <div className="flex justify-center items-center text-white text-sm font-semibold mt-4">
        <FaUtensils className="w-6 h-6 mr-2" />
        <p>Search a recipe of any meal.</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <SearchInput />
      </div>
    </div>
  );
};

export default HomePage;
