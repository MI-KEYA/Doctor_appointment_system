import React from 'react';
import { Link } from 'react-router';
import errorImage from '../assets/error404.jpeg'

const ErrorPage = () => {
    return (
        <div className='w-2/3 mx-auto text-center'>
        <div className='flex justify-center mb-5'>
            <img src={errorImage} alt="" />
        </div>
        <h1 className='font-bold text-3xl text-pink-300 mb-5'>404 - Page Not Found</h1>
        <p className='mb-5 font-semibold'>Oops! the page you're looking for doen't exist</p>
        <div>
            <Link to='/'><button className='btn mb-10 bg-blue-600 text-white rounded-3xl'>Go Back Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;