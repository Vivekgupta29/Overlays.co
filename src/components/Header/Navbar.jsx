import React from "react";
import OverlaysLogo from "../../assets/Logos/android-chrome-192x192.png";
function Navbar({scrolled}) {
    
  return (
    <div className={`${scrolled > 1 ? "sticky top-0 bg-white text-black" :"absolute bg-transparent text-white hover:bg-white hover:text-black"}  w-full h-16 flex items-center justify-center duration-500`}>
      <div className="flex justify-around items-center w-full">
        <div className="Logo cursor-pointer">
          <img src={OverlaysLogo} alt="" className="h-8 w-8" />
        </div>
        <div className="Navigationss">
          <ul className="flex space-x-4">
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Home</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">All Products</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Men</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Women</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Rich Cotton</li>
            <li className="hover:text-customOverlaysColor cursor-pointer nav-item">Contact Us</li>
          </ul>
        </div>
        <div className="logincart flex space-x-5">
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
