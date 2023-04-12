import Header from "./components/Header";
import Recipes from "./components/Recipes";

const HomePage = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <Header />

      {/* @ts-expect-error Server Component */}
      <Recipes />
    </div>
  );
};

export default HomePage;
