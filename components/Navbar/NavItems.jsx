import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; 

const NavItems = ({ closeSidebar = () => {} }) => {
  const router = useRouter();
  
  const navigation = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about-me", id: "about-me" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "/projects/app", id: "projects" },
    { name: "Contact", href: "#contact-us", id: "contact-us" },
  ];

  const [activeId, setActiveId] = useState("");

  const handleNavigation = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      
      router.push(href);
    }

    closeSidebar(); 
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    const observedSections = navigation
      .filter((nav) => nav.href.startsWith("#")) 
      .map((nav) => document.getElementById(nav.id))
      .filter(Boolean);

    observedSections.forEach((section) => observer.observe(section));

    return () => {
      observedSections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-12 flex flex-col items-center gap-10 lg:mt-0 lg:flex-row">
      <ul className="flex flex-col items-center gap-6 text-base font-semibold sm:gap-10 lg:flex-row">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <a
              href={nav.href}
              onClick={(e) => handleNavigation(e, nav.href)}
              className={`font-medium text-base ${
                activeId === nav.id ? "text-primary font-bold" : "text-white"
              } hover:text-light`}
            >
              <span className="poppins-text">{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
