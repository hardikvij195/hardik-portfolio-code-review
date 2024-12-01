import AboutMe from "@/components/AboutMe";
import AICall from "@/components/AICall";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar/Navbar";
import PopularServices from "@/components/PopularServices";
import Projects from "@/components/Projects";
import ServiceSection from "@/components/ServiceSection";
import Technologies from "@/components/Technologies";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WorkExperience from "@/components/WorkExperience";

import Image from "next/image";


export default function Home() {
  return (
    <div
      
    >
    
      <Banner/>
      <AboutMe />
      <WorkExperience />
      <Technologies />
      <ServiceSection />
      <PopularServices/>
      <Projects />
      <AICall/>
       <TestimonialsCarousel />
      <Contact />
     
    </div>
  );
}
