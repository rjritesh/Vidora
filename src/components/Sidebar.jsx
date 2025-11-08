import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { FaRegClock, FaRegThumbsUp } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;


  return (
    <aside className="w-64 bg-zinc-900 text-white h-[calc(100vh-64px)] p-5 fixed left-0 top-16 flex flex-col justify-between border-r border-zinc-800">
      {/* Navigation Section */}
      <div className="space-y-5">
        <SidebarItem icon={<AiFillHome size={22} />} label="Home" active />
        <SidebarItem icon={<MdOutlineExplore size={22} />} label="Explore" />
        <SidebarItem icon={<MdSubscriptions size={22} />} label="Subscriptions" />
        <SidebarItem icon={<MdVideoLibrary size={22} />} label="Library" />

        <hr className="border-zinc-700" />

        <h2 className="text-zinc-400 text-sm uppercase mt-3 tracking-wide">
          Explore
        </h2>
        <SidebarItem icon={<FaRegClock size={20} />} label="Watch Later" />
        <SidebarItem icon={<FaRegThumbsUp size={20} />} label="Liked Videos" />
      </div>

      {/* Bottom Section */}
      <div>
        <SidebarItem icon={<IoMdSettings size={22} />} label="Settings" />
      </div>
    </aside>
  );
};

// Reusable Sidebar Item
const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800 transition ${active ? "bg-zinc-800 font-semibold" : ""
      }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
