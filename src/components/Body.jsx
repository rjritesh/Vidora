import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Navbar at top */}
      <Navbar />

      {/* Sidebar below Navbar */}
      <div className="p-6">
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;
