import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = ({ closeSidebar }) => {
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

 
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const navigation = [
    
    { name: "About", path: "/#about-me", id: "about-me" },
    { name: "Services", path: "/#services", id: "services" },
    { name: "Projects", path: "/#projects", id: "projects" },
    { name: "Contact", path: "/#contact", id: "contact-us" },
  ];

  const handleClick = (e, path) => {
    
    if (router.asPath === path) {
      const targetId = path.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        if (closeSidebar) closeSidebar();
      }
    } else {
      
      router.push(path);
      if (closeSidebar) closeSidebar();
    }
  };

  const isActive = (path) => {
   
    if (path === "/" && router.asPath === "/") {
      return true;
    }

    
    if (path === "/#services" && router.asPath.startsWith("/services")) {
      return true;
    }

    if (path === "/#projects" && router.asPath.startsWith("/projects")) {
      return true;
    }
    
    if (isBrowser && path.includes("#") && window.location.hash === path) {
      return true;
    }

   
    return router.asPath === path || router.asPath.startsWith(path);
  };

  return (
      <div className="mt-12 flex flex-col items-center gap-10 lg:mt-0 lg:flex-row">
            <Link href={"/"} passHref scroll={false} className="lg:-mb-0 -mb-4">
              <div
                onClick={(e) => router.push("/")}
                className={`font-medium text-base ${
                 "text-white"
                } hover:text-light`}
              >
                <span className="poppins-text">Home</span>
              </div>
            </Link>
      <ul className="flex flex-col items-center gap-6 text-base font-semibold sm:gap-10 lg:flex-row">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path} passHref scroll={false}>
              <div
                onClick={(e) => handleClick(e, nav.path)}
                className={`font-medium text-base ${
                  isActive(nav.path) ? "text-primary font-bold" : "text-white"
                } hover:text-light`}
              >
                <span className="poppins-text">{nav.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
