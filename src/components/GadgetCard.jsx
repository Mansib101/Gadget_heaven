const GadgetCard = () => {
    return (
    <div className="max-w-sm border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
          src='../../assets/banner.jpg'
          alt=''
        />
        
      </div>

      {/* Content */}
      <div className="p-5  bg-white">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Dell Xps 13
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-600">
          High-quality materials and ergonomic design for everyday comfort.
        </p>
        
        <div className="flex flex-wrap items-center justify-between mt-4">
          <span className="text-gray-700 whitespace-nowrap">Price: 1000 BDT</span>
          <div className="p-0.5 rounded-full bg-linear-to-r from-blue-400 to-purple-500">
          <button className="bg-white text-purple-600 font-semibold px-2 py-1 whitespace-nowrap 
          rounded-full hover:bg-gray-100 active:bg-white transition-all duration-250">
            View Details
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;