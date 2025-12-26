const CategoryButton = ({Category}) => {
    return (
        <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48
         px-2 py-3 shadow-md transition-all duration-300 hover:shadow
         hover:opacity-60">{Category}</button>
    );
};

export default CategoryButton;