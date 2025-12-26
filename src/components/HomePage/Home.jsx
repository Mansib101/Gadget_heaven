import GadgetCard from '../GadgetCard'
import CategoryButton from './CategoryButton';
const Home = () => {
    const Categories = ["All Producs", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"];
    return (
        <div className="flex flex-col items-center gap-12">
            <h1 className="text-[40px] font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-6 h-fit border border-gray-300 p-6 rounded-2xl bg-white">
                    {Categories.map((Category, index) => <CategoryButton key={index} Category={Category}></CategoryButton>)}
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