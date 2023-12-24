import React, { useState } from "react";
import Input from "../../UI/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
// const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
    
//   };

  return (
    <>
      <div className=" text-white flex items-center  justify-between font-mono py-5 mt-1 ">
        <div className="flex  items-center leftSide">
          <div className="logo">
            <Link to={"/"} className="">
              <span className="text-[red] text-[50px] fw-bold  md:text-[45px] lg:text-[50px]">
                NET
              </span>
              <span className="text-[white] text-[25px]   md:text-[30px] lg:text-[35px] font-sans font-thin	">
                film
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden  md:block md:flex">
          <label
            htmlFor=""
            className="flex  flex-row items-center gap-4  bg-white bg-opacity-10 shadow-xl"
          >
            <Input
              placeholder={"Search..."}
              className={
                " w-[120px] sm:w-[170px] md:w-[220px] lg:w-[270px] outline-none bg-transparent"
              }
             
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-white w-[18px] h-[20px] px-3 cursor-pointer"
             
            />
          </label>
        </div>

        <div className="flex gap-5 items-center rightSide">
          <div className="  ">
            <ul className=" hidden  md:block md:flex  gap-4 md:text-[12px] lg:text-[15px]">
              <li>
                <Link
                  to={"/"}
                  className="transition duration-700 hover:text-[red]"
                >
                  MOVIES
                </Link>
              </li>
              <li>
                <a href="" className="transition duration-700 hover:text-[red]">
                  SERIES
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="" className="transition duration-700 hover:text-[red]">
                  KIDS
                </a>
              </li>
            </ul>
          </div>
          <div className="account ">
            <ul className="flex gap-4">
              <li>
                <Link to={"/favori"}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red hover:text-[red] text-[20px] cursor-pointer transition duration-700 md:text-[16px]"
                  />
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[20px] md:text-[16px] cursor-pointer transition duration-700 hover:text-[red]"
                  />
                </Link>
              </li>
              <FontAwesomeIcon
                icon={faBars}
                className="block md:hidden text-[20px] md:text-[16px] "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
