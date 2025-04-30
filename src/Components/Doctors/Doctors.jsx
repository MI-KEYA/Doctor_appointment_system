import React, { Suspense, useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Success from '../Success/Success';



const Doctors = ({ data }) => {
    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (showAll) {
            setDisplayDoctors(data);
        } else {
            setDisplayDoctors(data.slice(0, 6))
        }
    }, [data, showAll])

    return (
        <div className='w-4/5 mx-auto mb-10'>
            <h1 className='text-center font-bold text-3xl my-10'>Our Best Doctors</h1>
            <p className='text-center text-gray-500 text-xl mb-10 px-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid lg:grid-cols-3 grid-col-1 gap-3 '>
                <Suspense fallback={<span>Loadingg......</span>}>
                    {
                        displayDoctors.map((singleDoctor) => <Doctor key={singleDoctor.registration_number} singleDoctor={singleDoctor}></Doctor>)
                    }
                </Suspense>
            </div>
            <div className='flex justify-center my-10'>
                <button onClick={() => {
                    setShowAll(prev => !prev)
                    if (showAll) {
                        window.scrollTo(0, 700);
                    }
                }}
                    className='btn justify-center rounded-3xl text-white bg-blue-600 '>
                    {showAll ? "Show less" : "See all Doctors"}
                </button>
            </div>
            <div>
                <Success></Success>
            </div>
        </div>
    );
};

export default Doctors;