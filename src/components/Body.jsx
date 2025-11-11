import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className="flex bg-zinc-900 min-h-screen pt-16">
      {/* Sidebar fixed, Main content shifted */}
     
      <div className="flex-1 ml-64 p-6 overflow-y-auto">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
