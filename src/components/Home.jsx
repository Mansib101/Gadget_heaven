import GadgetCard from './GadgetCard'
const Home = () => {
    return (
        <div className="flex flex-col items-center gap-12">
            <h1 className="text-[40px] font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-6 h-fit border border-gray-300 p-6 rounded-2xl bg-white">
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-60">All Products</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">Laptops</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">Phones</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">Accessories</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">Smart watches</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">MacBook</button>
                    <button className="bg-[rgba(9,8,15,0.05)] rounded-full lg:w-48 px-2 py-3 shadow-md transition-all duration-300 hover:shadow hover:opacity-75">Iphone</button>
                </div>
                <div className ='grid md:grid-cols-2 lg:grid-cols-3 bg-ambr-400 gap-6'>
                <GadgetCard></GadgetCard>
                <GadgetCard></GadgetCard>
                <GadgetCard></GadgetCard>
                <GadgetCard></GadgetCard>
                <GadgetCard></GadgetCard>
            </div>
            </div>
        </div>
    );
};

export default Home;