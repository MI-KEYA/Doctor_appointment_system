import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='w-2/3 mx-auto text-center mt-20'>
            <h1 className='text-3xl font-bold mb-3'>We Provide Best Medical Services</h1>
            <p>Our platform connects you with verified,
                experienced doctors across various specialties — all at your convenience.
            </p>
            <div className=' grid  lg:grid-cols-4 gap-5 my-10'>
                <div className='bg-white p-3 rounded-xl'>
                    <div className='flex mb-4 justify-center'>
                    <img src="/src/assets/success-doctor.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>
                    <CountUp
                            end={1000}
                            duration={5}
                        />
                        +
                    
                    </h1>
                    <p className='text-gray-600'>Total Doctors</p>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                <div className='flex mb-4 justify-center'>
                    <img src="/src/assets/success-review.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>
                    <CountUp
                            end={500}
                            duration={5}
                        />
                        +
                    </h1>
                    <p className='text-gray-600'>Total Reviews</p>
                </div>
                <div className='bg-white p-3 rounded-xl'>
                <div className='flex mb-4 justify-center'>
                    <img src="/src/assets/success-patients.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>
                    <CountUp
                            end={5000}
                            duration={5}
                        />
                        +
                    </h1>
                    <p className='text-gray-600'>Patients</p>
                </div>
                <div className='bg-white p-3 rounded-xl '>
                <div className='flex mb-4 justify-center'>
                    <img src="/src/assets/success-staffs.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>
                        <CountUp
                            end={2000}
                            duration={5}
                        />+
                    </h1>
                    <p className='text-gray-600'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Success;