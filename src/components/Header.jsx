import React from 'react';
import Hamburger from '../assets/images/hamburger.jpg';
import Logo from '../assets/images/Logo.png';
import UserIcon from '../assets/images/user-icon.png';

const Header = () => {
  return (
    <div className="grid grid-cols-12 p-5 m-2 shadow-lg">
      {/* Left section with hamburger and logo */}
      <div className="flex col-span-2 justify-between items-center">
        <div className="h-auto w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16">
          <img src={Hamburger} alt="menu" className="w-full h-auto" />
        </div>
        <div className="h-auto w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
      <img src={Logo} alt="logo" className="w-full h-auto" />
    </div>
      </div>

      {/* Search bar in the center */}
      <div className="col-span-8 text-center flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-red-700 text-white rounded-r-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          Search
        </button>
      </div>

      {/* Right section with user icon */}
      <div className="h-auto w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 col-span-2 flex justify-center items-center">
        <img src={UserIcon} alt="user-icon" className="w-8 h-auto" />
      </div>
    </div>
  );
};

export default Header;
