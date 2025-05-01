import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ singleDoctor }) => {
    
    const { name, image, education, speciality, registration_number, experience, available } = singleDoctor
    return (
        <div>
            <div className="card bg-base-100 pt-3 shadow-sm">
                <figure>
                    <img
                        className='w-[200px] h-[200px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-actions ml-8 gap-5 mt-5">
                    <div className="badge badge-outline rounded-3xl px-5 text-green-600 bg-green-100">{(available) ? "Available" : "Not Available"}</div>
                    <div className="badge badge-outline rounded-3xl px-5 text-blue-600 bg-blue-100">{experience}+ experience</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p className='text-gray-400'>{education}, {speciality}</p>
                    <hr className='border-b-gray-200 border-1 border-dashed my-2'></hr>
                    <p className='font-bold text-gray-400 '>Reg No: {registration_number}</p>
                    <Link to={`/doctorDetails/${registration_number}`} >
                        <div className="card-actions justify-end">
                            <button onClick={()=> window.scrollTo(0, 0)}  className="btn text-blue-600 border-blue-600 w-4/5 mx-auto mt-3 rounded-3xl py-2
                           hover:text-white hover:bg-blue-600">View Details</button>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;