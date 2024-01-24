import React, { useContext, useState } from "react";
import Logo from "../Images/Logo.png";
import "../index.css";
import { context } from "../Context/contextApi";

const Header = () => {
  const { setSearchTerm } = useContext(context);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const searchData = () => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <div className="header w-full flex items-center border-b-2 2xl:pl-36 xl:pl-0 lg:pl-12 md:pl-20">
        <img src={Logo} className="sm:w-28 w-20" alt="pixabay-lite-logo" />
        <div className="mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full bg-gray-100 sm:w-96 w-44 sm:h-9 h-8 sm:p-3 p-2 sm:mr-4 mr-2 text-xs"
            onChange={handleChange}
          />
          <button
            onClick={searchData}
            className=" text-white  bg-[#00ab6b] sm:py-2 sm:px-4 px-3 py-1 rounded-full"
          >
            <i className="fa-solid fa-magnifying-glass text-xs sm:mr-2 mr-0"></i>
            <span className="sm:inline-block hidden">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
