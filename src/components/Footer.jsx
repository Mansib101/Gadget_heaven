const Footer = () => {
    return (
        <div className="py-16 flex flex-col items-center">
            <div className="text-center px-5">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <hr class="border-t border-[rgba(9,8,15,0.1)] w-5/6 my-7" />

            <div className="grid grid-cols-3 text-center w-5/6 lg:w-3/4 ">
                <div>
                    <h1 className="font-bold text-lg mb-4">Services</h1>
                    <ul>
                        <li className="text-gray-500">Product Support</li>
                        <li className="text-gray-500">Order Tracking</li>
                        <li className="text-gray-500">Shipping & Delivery</li>
                        <li className="text-gray-500">Returns</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">Company</h1>
                    <ul>
                        <li className="text-gray-500">About Us</li>
                        <li className="text-gray-500">Career</li>
                        <li className="text-gray-500">Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">Legal</h1>
                    <ul>
                        <li className="text-gray-500">Terms of Service</li>
                        <li className="text-gray-500">Privacy Policy</li>
                        <li className="text-gray-500">Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;