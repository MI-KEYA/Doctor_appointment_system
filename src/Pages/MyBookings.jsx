import React from 'react';

const MyBookings = () => {
    return (
        <div className='w-2/3 mx-auto text-center my-10'>
           <h1 className='font-bold text-3xl mb-5'>You have not booked any appointment yet.</h1>
           <p className='mb-5 text-gray-600'>Our platform connects you with verified, experienced doctors
            across various specialities - all at your convenience.
           </p>
           <button className='btn text-white bg-blue-600 rounded-3xl'>Book an Appointment</button>
        </div>
    );
};

export default MyBookings;