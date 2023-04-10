import Logout from "./Logout";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-950 p-4">
      <span className="text-lg font-bold text-white">J-Recipe</span>
      <Logout />
    </div>
  );
};

export default Header;
