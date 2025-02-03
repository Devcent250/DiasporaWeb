const Activities = () => {
    return (
      <div className="flex flex-wrap justify-center items-center gap-6 pb-10 mt-12 md:grid-cols-2">
        {[
          { count: "100+", label: "Members" },
          { count: "73", label: "Houses Built" },
          { count: "5", label: "Businesses" },
          { count: "13", label: "Plots to Sell" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#ffebbe] flex flex-col justify-center items-center space-y-1 px-10 py-4 rounded-2xl w-40 sm:w-48 md:w-56 lg:w-64 text-center"
          >
            <span className="text-[30px] font-semibold text-[#06159e]">
              {item.count}
            </span>
            <span className="font-semibold text-[#2d2d2d]">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Activities;
  