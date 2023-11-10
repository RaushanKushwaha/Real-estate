import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Home from '../pages/Home'
const Header = () => {
  return (
    <header className=" bg-blue-100 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl py-5">
         <Link to='/'>
        <h2 className=" font-bold text-lg sm:text-xl md:text-2xl font-serif ">
          <span className="text-red-700">Own</span>
          <span className=" text-blue-700">Estate</span>
        </h2>
         </Link>
        <form className="">
            <div className="item flex  bg-white items-center rounded-md pr-3 ">
             <input type="text" placeholder="Search here...."  className=" p-2 border-none outline-none rounded-md w-28 sm:w-72"/>
            <FaSearch className=" text-blue-700 "/>
            </div>
        </form>
        <ul className="flex justify-between items-center gap-5 font-bold">
          <Link to='/'>
          <li className=" hidden sm:inline hover:text-red-700" >Home</li>
          </Link> 
          <Link to='/about'>
            <li className="hidden sm:inline hover:text-red-700">About</li>
          </Link> 
          <Link to='/sign-in'>
            <li className="hidden sm:inline hover:text-red-700">Sign in</li>
          </Link>
        </ul>
      </div>

    </header>
  );
};

export default Header;
