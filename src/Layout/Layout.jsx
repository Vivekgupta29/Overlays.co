import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ScrollContextProvider } from "../Contexts";
import { IsNavOpenProvider } from "../Contexts";

function Layout() {

  const [scrolled, setScrolled] = useState(0);
  const [IsNavOpen, setNavIsOpen] = useState(false);

  const ChangeScrolledValue = (value) => {
    setScrolled(value);
    console.log(value)
  }

  const ChangeNavIsOpen = () => {
    setNavIsOpen((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => ChangeScrolledValue(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => ChangeScrolledValue(window.scrollY));
    };
  }, []);

  // const location = useLocation()
  // console.log("Active Outlet:", location.pathname);


  return (
    <>
      <ScrollContextProvider value={{ scrolled, ChangeScrolledValue }}>
        <IsNavOpenProvider value={{ IsNavOpen, ChangeNavIsOpen }}>
          <div className="scroll-smooth w-full h-full">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </IsNavOpenProvider>
      </ScrollContextProvider>
    </>
  );
}

export default Layout;
