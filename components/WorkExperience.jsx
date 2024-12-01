import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Development Manager",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    image: "/work/1.png",
  },
  {
    title: "AI Automations Specialist",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    image: "/work/2.png",
  },
  {
    title: "Full Stack Software Developer",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    image: "/work/3.png",
  },
  {
    title: "Sr. Flutter Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
    image: "/work/4.png",
  },
];

function WorkExperience() {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2, // Add a delay between each child's animation
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, type: "spring", stiffness: 120 },
  };

  return (
    <div className="bg-[#000319] py-12 px-4 min-h-screen flex items-center justify-center">
      <div className="container mx-auto lg:w-[80%]">
        <motion.h2
          className="text-gray-200 font-semibold lg:text-4xl text-2xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          My <span className="text-purple-500">work experience</span>
        </motion.h2>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="lg:flex lg:flex-row flex flex-col bg-[#11152b] px-3 py-6 rounded-lg shadow-lg lg:items-center lg:space-x-6 border-t-2 border-primary"
              variants={cardVariants}
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="lg:w-24 lg:h-24 w-16 h-16 object-cover rounded-full"
              />
              <div className="lg:mt-0 mt-5">
                <h3 className="text-light font-semibold text-xl">
                  {experience.title}
                </h3>
                <p className="text-light mt-4 text-base">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WorkExperience;
