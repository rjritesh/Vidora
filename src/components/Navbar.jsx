import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-800 p-4 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-3">
        <AiOutlineMenu
          size={38}
          className="text-white cursor-pointer p-2 rounded-full hover:bg-zinc-700"
        />
        <span className="text-3xl font-bold text-indigo-500 tracking-wide">
          Vidora
        </span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center bg-zinc-900 rounded-md border border-zinc-700 px-3 py-2 w-[400px]">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white outline-none placeholder-zinc-400 w-full"
        />
        <CiSearch size={22} className="text-zinc-400 cursor-pointer" />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-3 py-2 rounded-md text-white font-semibold">
          <FiPlus size={18} /> Create
        </button>
        <IoIosNotificationsOutline
          size={26}
          className="text-white cursor-pointer hover:text-zinc-400"
        />
        <FaUserCircle
          size={26}
          className="text-white cursor-pointer hover:text-zinc-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
