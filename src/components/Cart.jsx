import { motion, AnimatePresence } from "framer-motion";
const Cart = () => {
    return (
        <>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.3 }}
            >
            <div>
                This is the cart page
            </div>
            </motion.div>
        </AnimatePresence>
       
        </>
    );
};

export default Cart;