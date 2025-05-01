import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
       <li className="m-2 font-semibold list-none">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 underline' : 'text-gray-800'
        }
      >
        Home
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/myBookings"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 underline' : 'text-gray-800'
        }
      >
        My Bookings
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 underline' : 'text-gray-800'
        }
      >
        Blogs
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/contactUs"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 underline' : 'text-gray-800'
        }
      >
        Contact Us
      </NavLink>
    </li>
  </>;


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