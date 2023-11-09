import React from "react";
import { Link } from "react-router-dom";
import SholkShrivastavoverlays from "../../assets/Shlok-Shrivastav-Overlays.webp";
function Homepage({ scrolled }) {
  return (
    <>
      <div className="w-full h-full">
        <img src={SholkShrivastavoverlays} className="md:object-cover md:object-top md:w-full  
        object-cover object-[48%]
        h-[100vh]" alt="" />
        <div className={`${scrolled > 1 ? "" : "bg-gradient-to-t md:bg-gradient-to-tr from-black to-transparent"} absolute top-16 w-full h-full opacity-100`}>
          <div className=" absolute p-4 bottom-[15em] left-[50%] translate-x-[-50%] md:bottom-[10em] md:left-[4em] md:translate-x-0">
            <h1 className="text-4xl font-bold text-white">Overlays Clothing</h1>
            <Link to="allproducts">
              <button className="group/button flex border outline-none bg-[#e3a82b]  border-black hover:border-white font-bold cursor-pointer mt-3 px-4 py-2">

                Shop Now
                <svg className="w-6 h-6 ml-1 group-hover/button:ml-4 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
