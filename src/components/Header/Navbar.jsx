import React, { useState } from "react";
import OverlaysLogo from "../../assets/Logos/android-chrome-192x192.png";
import { useContext } from "react";
function Navbar({ scrolled }) {

  const [NavIsOpen, setNavIsOpen] = useState(false)
  return (
    <div className={`${scrolled > 1 ? "sticky top-0 bg-white text-black" : "absolute bg-transparent text-white hover:bg-white hover:text-black"} group/navbar z-10 w-full h-16 flex items-center justify-center transform- duration-500`}>
      <div className="flex md:justify-around justify-between px-4 md:px-0 items-center w-full">
        <div className="md:hidden">
        </div>
        <div className="Logo cursor-pointer">
          <img src={OverlaysLogo} alt="" className="h-8 w-8" />
        </div>
        <button
          onClick={() => setNavIsOpen(!NavIsOpen)}
          type="button"
          id="mobile-button"
          className={`${scrolled > 1 ? "bg-customOverlaysColor" : ""} flex items-center p-1 w-10 h-10 justify-center text-sm md:hidden
            hover:bg-cyan-500 group-hover/navbar:bg-customOverlaysColor
              focus:outline-none 
            `}
        >
          <div className="flex flex-col flex-wrap items-center justify-evenly w-full h-full cursor-pointer">
            <div
              className={`${NavIsOpen
                ? "transform rotate-45 translate-y-[0.5rem] h-[0.1em]"
                : ""
                } w-7 h-[0.2em] bg-white duration-500`}
            ></div>

            <div
              className={`${NavIsOpen ? "opacity-0" : "opacity-100"
                } w-5 ml-2 h-[0.1em] bg-white duration-500`}
            ></div>

            <div
              className={`${NavIsOpen
                ? "transform rotate-[-45deg] translate-y-[-0.5rem] h-[0.1em]"
                : ""
                } w-7 h-[0.2em] bg-white duration-500`}
            ></div>
          </div>
        </button>
        <div className={`${NavIsOpen
                ? "absolute left-0  w-full h-[87vh] duration-500 text-black "
                : "absolute left-[-100%] duration-500"
                }
                w-full h-[88vh] bg-white top-[4em] 
        md:bg-transparent md:static 
        font-medium text-lg
        md:h-auto md:w-auto
        md:block Navigationss`}>
          <ul className={`${NavIsOpen
                ? "space-y-5 md:space-y-0"
                : "space-y-5 md:space-y-0"
                }
                flex flex-col p-10  md:p-0 md:flex-row md:space-x-4`}>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Home</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">All Products</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Men</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Women</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Rich Cotton</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Contact Us</li>
          </ul>
        </div>
        <div className="hidden md:flex logincart space-x-5">
          <div>
            <svg
              class="w-6 h-6 hover:text-customOverlaysColor cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
              />
            </svg>
          </div>
          <div>
            <svg
              class="w-6 h-6 hover:text-customOverlaysColor cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div>
            <svg
              class="w-6 h-6 hover:text-customOverlaysColor cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
