import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import NavItems from "./NavItems";
import Link from "next/link";


const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  const [windowHeight, setWindowHeight] = useState("");
  
  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <section className={`flex w-full justify-between items-center px-5 lg:px-10 top-0 z-[101] fixed font-medium drop-shadow transition-five bg-[#000319]`}>
        <div className="container mx-auto hidden w-full justify-between py-1 px-4 lg:flex">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" width={100} height={60} className="mr-4" />
            </div>
          </Link>
          <NavItems windowHeight={windowHeight} />
        </div>
      </section>
      
      <section className={`flex w-full justify-between items-center px-5 lg:px-10 py-3 top-0 z-[101] fixed font-medium drop-shadow transition-five lg:hidden bg-[#000319]`}>
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" width={80} height={60} className="mr-4" />
          </div>
        </Link>
        
        <div>
          {!navModal ? (
            <Menu
              className="h-10 w-10 text-white"
              onClick={() => setNavModal(true)}
            />
          ) : null}
        </div>
        
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-[240px]  bg-background px-4 pt-5 shadow-xl shadow-black ${!navModal ? "hidden" : "block lg:hidden"}`}
        >
          <div className="flex items-center justify-between">
            <span>
              {navModal ? (
                <X
                  className={`z-[99999] h-10 w-10 text-light`}
                  onClick={() => setNavModal(false)}
                />
              ) : null}
            </span>
          </div>
          <NavItems closeSidebar={() => setNavModal(false)} />
        </div>
      </section>
    </>
  );
};




export default Navbar;
