import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to='/'> <li className='m-2'>Home</li></Link>
        <Link to='/myBookings'><li className='m-2'>My Bookings</li></Link>
        <Link to='/blogs'><li className='m-2 list-none'>Blogs</li></Link>
        <Link to='/contactUs'><li className='m-2 list-none'>Contact us</li></Link>
    </>
    return (
        <div className="navbar lg:w-2/3 mx-auto mb-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src="/src/assets/logo.png" alt="" />
                    <a className="btn btn-ghost font-bold text-xl">DocTalk</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white bg-blue-600 rounded-3xl">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;