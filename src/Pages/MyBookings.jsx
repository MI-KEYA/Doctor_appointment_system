import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router';
import { getBookings, removeBooking } from '../Utils';
import AppointedDoctor from '../Components/AppointedDoctor';


const MyBookings = () => {
    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const savedDoctors = getBookings();
        setDisplayDoctors(savedDoctors);
        setBookings(savedDoctors);
    }, []);
const handleDelete= reg=>{
    removeBooking(reg)
    setBookings(getBookings())
    setDisplayDoctors(getBookings())
}
    return (
        <>
            {bookings.length === 0 ? (
                <div className='w-2/3 mx-auto text-center my-10'>
                    <h1 className='font-bold text-3xl mb-5'>You have not booked any appointment yet.</h1>
                    <p className='mb-5 text-gray-600'>
                        Our platform connects you with verified, experienced doctors across various specialities - all at your convenience.
                    </p>
                    <Link to='/'><button className='btn text-white bg-blue-600 rounded-3xl'>Book an Appointment</button></Link>
                </div>
            ) : (
                
                    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                        {displayDoctors.map((singleDoctor) => (
                            <AppointedDoctor key={singleDoctor.registration_number} handleDelete={handleDelete} singleDoctor={singleDoctor} />
                        ))}
                    </Suspense>
                
            )}
        </>
    );
};

export default MyBookings;
