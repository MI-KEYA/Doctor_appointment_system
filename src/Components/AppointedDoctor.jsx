import React from 'react';


const AppointedDoctor = ({ singleDoctor, handleDelete }) => {
    const { name, registration_number, education, speciality, fee } = singleDoctor
    return (
        <div className='w-2/3 mx-auto bg-white p-10 mb-10 rounded-3xl'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-semibold text-xl mb-3'>{name}</h1>
                    <p className='font-semibold text-gray-400'>{education}-{speciality}</p>
                </div>
                <div className='font-semibold text-gray-400 mt-10'>Appointment Fee: {fee} TAKA + VAT</div>
                
            </div>
            <hr className='text-gray-300  mt-5' />
            <button onClick={()=>handleDelete(registration_number)}
             className='btn w-full text-red-700 bg-red-50 mt-5 rounded-3xl hover:text-white hover:bg-red-700'>
                Cancel Appointment
            </button>
           
        </div>
    );
};

export default AppointedDoctor;