import TopButtonCapsule from "./TopButtonCapsule";

const MainContainer = () => {
  return (
    <div className="text-white space-y-4">


      {/* Example cards
      <div className="grid grid-cols-4 gap-5">
        {Array(8)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="bg-zinc-800 h-40 rounded-xl hover:scale-105 transition-transform cursor-pointer"
            ></div>
          ))}
      </div> */}
      <TopButtonCapsule></TopButtonCapsule>
    </div>
  );
};

export default MainContainer;
