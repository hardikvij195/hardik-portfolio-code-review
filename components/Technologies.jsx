import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techIcons = [
  { id: "flutter", title: "Flutter", image: "/tech/1.svg" },
  { id: "firebase", title: "Firebase", image: "/tech/2.svg" },
  { id: "make", title: "Make (Integromat)", image: "/tech/9.svg" },
  { id: "highlevel", title: "HighLevel", image: "/tech/11.svg" },
  { id: "manychat", title: "ManyChat", image: "/tech/12.svg" },
  { id: "interakt", title: "Interakt", image: "/tech/13.svg" },
  { id: "meta", title: "Meta (Facebook)", image: "/tech/14.svg" },
  { id: "whatsapp", title: "WhatsApp", image: "/tech/15.svg" },
  { id: "chatgpt", title: "ChatGPT (OpenAI)", image: "/tech/16.svg" },
  { id: "googleads", title: "Google Ads", image: "/tech/17.svg" },
  { id: "email", title: "Email", image: "/tech/24.svg" }, 
  { id: "monday", title: "Monday.com", image: "/tech/19.svg" },
  { id: "slack", title: "Slack", image: "/tech/20.svg" },
  { id: "notion", title: "Notion", image: "/tech/21.svg" },
  { id: "wati", title: "Wati", image: "/tech/8.svg" },
  { id: "mysql", title: "MySQL", image: "/tech/3.svg" },
  { id: "nodejs", title: "Node.js", image: "/tech/4.svg" },
  { id: "nextjs", title: "Next.js", image: "/tech/5.svg" },
  { id: "python", title: "Python", image: "/tech/6.svg" },
  { id: "docker", title: "Docker", image: "/tech/7.svg" },
  { id: "zapier", title: "Zapier", image: "/tech/10.svg" },
  { id: "zoho", title: "Zoho", image: "/tech/23.svg" },
];

function Technologies() {
  

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  };

  return (
    <div className="bg-[#000319] py-12 lg:px-4 lg:h-screen flex items-center justify-center">
      <div className="container mx-auto lg:w-[85%] p-4">
        <motion.h2
          className="text-gray-200 font-semibold lg:text-4xl text-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          I'm an{" "}
          <span className="text-purple-500">
            Expert in These Technologies
          </span>
        </motion.h2>
        <motion.p
          className="text-light text-center mb-12 mt-4 lg:text-xl px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          I thrive on turning complex problems into simple, beautiful solutions
          that enhance user satisfaction.
        </motion.p>
        <motion.div
          className="flex flex-wrap lg:gap-8 gap-5 items-center justify-center"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        >
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={iconVariants}
            >
              <img
                src={icon.image}
                alt={icon.title}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
}

export default Technologies;
