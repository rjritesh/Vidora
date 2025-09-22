import { Home, Compass, Film, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white dark:bg-gray-800 shadow-lg p-4 hidden md:flex flex-col gap-2 overflow-y-auto">
      
      {/* Home */}
      <button className="flex items-center gap-3 text-gray-800 dark:text-gray-100 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <Home size={26} /> <span className="text-base">Home</span>
      </button>

      {/* Explore */}
      <button className="flex items-center gap-3 text-gray-800 dark:text-gray-100 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <Compass size={26} /> <span className="text-base">Explore</span>
      </button>

      {/* Subscriptions */}
      <button className="flex items-center gap-3 text-gray-800 dark:text-gray-100 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <Film size={26} /> <span className="text-base">Subscriptions</span>
      </button>

      {/* Watch Together */}
      <button className="flex items-center gap-3 text-gray-800 dark:text-gray-100 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <Users size={26} /> <span className="text-base">Watch Together</span>
      </button>

      {/* Settings (bottom) */}
      <button className="flex items-center gap-3 text-gray-800 dark:text-gray-100 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 mt-auto">
        <Settings size={26} /> <span className="text-base">Settings</span>
      </button>

    </aside>
  );
};

export default Sidebar;
