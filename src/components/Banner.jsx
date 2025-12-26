import React from 'react';

const Banner = () => {
    return (
        <div className="w-2/3  mb-12 bg-white/30 backdrop-blur-md aspect-2/1 border-2 border-white mx-auto -mt-20 flex justify-center rounded-4xl">
            <img className="object-fill h-full w-full rounded-3xl m-6" src="../../assets/banner.jpg" alt="Banner"></img>
        </div>
    );
};

export default Banner;