import { CircleUser, Menu, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../utils/AppSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-3  dark:bg-gray-800 shadow-sm">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-2">
        <button className="p-3 rounded-full text-gray-50 hover:bg-gray-900 cursor-pointer" onClick={() => {
          dispatch(toogleMenu())
        }}>
          <Menu size={28} />
        </button>
        <span className="text-3xl font-bold text-blue-600">Vidora</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Search videos..."
          className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
        />
        <button className="px-4 bg-blue-600 text-white rounded-r-full hover:bg-blue-700">
          <Search size={18} />
        </button>
      </div>

      {/* Right: User Icon */}
      <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300">
        <CircleUser size={40} />
      </button>

    </nav>
  );
}

export default Navbar;
