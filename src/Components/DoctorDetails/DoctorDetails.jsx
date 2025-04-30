import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const DoctorDetails = () => {
    const data = useLoaderData();
    const { reg } = useParams();
    const singleDoctor = data.find(doctor => doctor.registration_number === parseInt(reg))
    const {
        image,
        name,
        registration_number,
        education,
        speciality,
        hospital,
        available_days,
        fee

    } = singleDoctor;

    return (
        <div>

            <div className='bg-white my-5 w-2/3 mx-auto rounded-3xl py-10 text-center'>
                <h1 className='font-bold text-3xl mb-5'>Doctors Profile Details</h1>
                <p className='font-semibold'>A doctor's profile typically includes their name,
                    qualifications, specialization, years of experience, and affiliated hospital or clinic.
                </p>
            </div>

            <div className='bg-white p-5 w-2/3 mx-auto  rounded-3xl mb-20'>
                <div className='lg:flex gap-15 '>
                    <div>
                        <img className='w-[200px] h-[300px] mt-10' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl mt-5 mb-3'>{name}</h1>
                        <p className='font-semibold text-gray-400 '>{education} </p>
                        <p className='font-semibold text-gray-400 mb-5'>{speciality}</p>
                        <p className='font-semibold text-xl mb-2 text-gray-400'>Working at</p>
                        <p className='mb-3 font-semibold text-xl'>{hospital}</p><hr className='text-gray-300' />
                        <p className='font-semibold text-gray-400 my-3'>Reg No: {registration_number} </p><hr className='text-gray-300' />
                        <div className='lg:flex gap-3 items-center'>
                            <p className='font-semibold'>Availability:</p>
                            {
                                available_days.map(day => <p className='bg-amber-50 text-amber-300 px-3 py-1 my-3 rounded-3xl'>{day}</p>)
                            }
                        </div>
                        <p className='font-semibold'>Consultation Fee: <span className='font-semibold text-blue-500'>Taka: {fee} per consultation</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;