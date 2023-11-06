import React from "react";
import SholkShrivastavoverlays from "../../assets/Shlok-Shrivastav-Overlays.webp";
function Homepage({scrolled}) {
  return (
    <>
      <div className="w-full h-full">
        <img src={SholkShrivastavoverlays} className="object-cover object-top w-full h-[100vh]" alt="" />
        <div className={`${scrolled > 1 ? "" :"bg-gradient-to-tr from-black to-transparent"} absolute top-16 w-full h-full opacity-100`}>vxvx
          <div className="text-center absolute p-4 bottom-[10em] left-[4em]">
            <h1 className="text-4xl font-bold text-white">Overlays Clothing</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
