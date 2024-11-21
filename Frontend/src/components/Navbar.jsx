import React, { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Double negation to convert the result to a boolean
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    }
  };

  const navItems = (
    <>
      <li><a href='/' >Home</a></li>
      <li><a href='/menu' >Menu</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/about' >About</a></li>
    </>
  );

  return (
    <>
      <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-red-500">Domato</a>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>
          <div className='navbar-end space-x-1 flex-grow md:flex md:justify-end'>
            <div className='hidden md:flex items-center gap-2'>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>
            <div className="flex items-center space-x-6 pl-5">
              {isLoggedIn ? (
                <Logout onLogout={handleLogout} />
              ) : (
                <a
                  className="py-2 px-6 rounded-3xl border border-red-500 hover:bg-slate-200 duration-300 cursor-pointer"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                  Login
                </a>
              )}
              <Login setIsLoggedIn={setIsLoggedIn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
