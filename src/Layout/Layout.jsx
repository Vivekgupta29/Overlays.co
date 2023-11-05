import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function Layout() {
    const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled}/>
      <Outlet scrolled={scrolled}/>
      <Footer />
    </>
  );
}

export default Layout;
