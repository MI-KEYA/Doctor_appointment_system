import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const links = <>
       <li className="m-2 font-semibold list-none">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 font-bold border-b-3 border-blue-800' : 'text-gray-800'
        }
      >
        Home
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/myBookings"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 font-bold border-b-3 border-blue-800' : 'text-gray-800'
        }
      >
        Bookings
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 font-bold border-b-3 border-blue-800' : 'text-gray-800'
        }
      >
        Blogs
      </NavLink>
    </li>
    <li className="m-2 font-semibold list-none">
      <NavLink
        to="/contactUs"
        className={({ isActive }) =>
          isActive ? 'text-gray-500 font-bold border-b-3 border-blue-800' : 'text-gray-800'
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
                        className=" dropdown-content bg-base-100  z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost font-bold text-xl">DocTalk</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
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