import React from 'react';
 import image1 from '../../assets/banner-img-1.png'
 import image2 from '../../assets/banner-2.jpg'
const Banner = () => {
    return (
        <div className="border-4 p-10 rounded-2xl border-white  lg:h-[700px] lg:w-[1200px] mx-auto
         mb-5 flex flex-col text-center gap-5  justify-center items-center bg-gradient-to-t from-white via-gray-200 to-gray-300 
         ">

            <div>
                <h1 className="text-5xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
                <p className="py-6">
                 Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation,
                 book appointments in minutes and receive quality care you can trust.
                </p>
                <form className='lg:flex justify-center gap-2 mb-5'>
                    <input 
                    className='bg-white py-2 lg:w-2/5 px-3 rounded-3xl' 
                    type='text' placeholder='Search any Doctor'></input>
                <button className=" rounded-3xl btn btn-primary">Search now</button>
                </form>
            </div>
            <div className="lg:flex gap-5 ">
                <img
                    src={image1}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <img
                    src={image2}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Banner;