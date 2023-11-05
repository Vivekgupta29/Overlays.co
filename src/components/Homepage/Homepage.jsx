import React from "react";
import SholkShrivastavoverlays from "../../assets/Shlok-Shrivastav-Overlays.webp";
function Homepage({scrolled}) {
  return (
    <>
      <div className="">
        <img src={SholkShrivastavoverlays} className="object-cover object-top w-full h-[100vh]" alt="" />
        <div className={`${scrolled > 1 ? "top-16 inset-0 bg-gradient-to-tr from-black to-transparent " :""} opacity-100 text-white items-center`}>
          <div className="text-center p-4 absolute bottom-[10em] left-[4em]">
            <h1 className="text-4xl font-bold text-white">Overlays Clothing</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
