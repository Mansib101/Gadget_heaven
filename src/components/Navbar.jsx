import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "./Banner";
import {motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="">
        <div className="bg-[rgba(149,56,226,1)] rounded-2xl mx-7 mt-7 pb-32">
            <div className="flex justify-between px-32 pt-6 text-white">
                <div>
                    <h1 className="font-bold">Gadget heaven</h1>
                </div>
                <div>
                    <ul className="flex gap-12 text-sm">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li>Statistics</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div className="flex gap-4 text-black">
                    <NavLink to="/cart">
                    <button className="bg-white flex items-center justify-center w-10 h-10 rounded-full
                    hover:bg-gray-200 hover:scale-110 active:bg-white transition-all duration-250"><FontAwesomeIcon icon={faCartShopping}/></button>
                    </NavLink>
                    
                    <button className="bg-white flex items-center justify-center w-10 h-10 rounded-full
                    hover:bg-gray-200 hover:scale-110 active:bg-white transition-all duration-250"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
            </div>

            <div className="flex flex-col items-center text-white text-center leading-tight mt-12 mx-4">
                <h1 className="font-bold text-[56px] ">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="pt-6">
                    Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <button className="bg-white text-[rgba(149,56,226,1)] font-bold
                                    py-3.5 px-7 rounded-full mt-8 hover:bg-gray-200 active:bg-white hover:scale-110 transition-all duration-250">
                    Shop Now
                </button>
            </div>
        </div>
            <div>
                <AnimatePresence>
                    {location.pathname === "/" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.3 }}
            >  
            <Banner />
          </motion.div>
        )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;