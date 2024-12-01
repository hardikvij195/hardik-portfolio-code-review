import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/pagination";
import { MoveUpRight, Star } from "lucide-react";

const projects = {
  softwares: [
    {
      id: "app",
      title: "App",
      price: "$1100",
      description:
        "I will build a mobile app development, iOS app, Android app responsive design",
      rating: "5.0",
      images: ["/services/minglewise.png", "/services/minglewise.png"],
    },
    {
      id: "website",
      title: "Website",
      price: "$1100",
      description:
        "I will build a mobile app development, iOS app, Android app responsive design",
      rating: "5.0",
      images: ["/services/fortify.png", "/services/minglewise.png"],
    },
    {
      id: "admin-panel",
      title: "Admin Panel",
      price: "$1100",
      description:
        "I will build a mobile app development, iOS app, Android app responsive design",
      rating: "5.0",
      images: ["/services/jcw.png", "/services/minglewise.png"],
    },
  ],
  aiAutomations: [
    {
      id: "ai-ml",
      title: "AI ML",
      price: "$1100",
      description:
        "I will build AI/ML applications with advanced algorithms and responsive design",
      rating: "5.0",
      images: ["/services/minglewise.png", "/services/minglewise.png"],
    },
  ],
  marketing: [
    {
      id: "seo-services",
      title: "SEO Services",
      price: "$500",
      description:
        "I will optimize your website for search engines to improve rankings",
      rating: "5.0",
      images: ["/services/minglewise.png", "/services/minglewise.png"],
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("softwares");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const renderProjects = projects[activeTab] || [];

  const handleCardClick = (id) => {
    router.push(`/projects/${id}`);
  };

  return (
    <section className="bg-[#000319] text-white pt-28 pb-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
       <motion.h2
          className="lg:text-4xl text-2xl font-semibold mb-4 text-light"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          Latest <span className="text-primary">Projects</span>
        </motion.h2>
       <motion.p
          className="text-light max-w-xl mx-auto mb-8 lg:text-lg text-sm"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
        >
          Must explain to you how all this mistaken idea of denouncing
          pleasure born and give you a complete account the system
        </motion.p>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab("softwares")}
            className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
              activeTab === "softwares"
                ? "bg-[#272A3C80] text-primary border-t-2 border-light"
                : "text-light bg-[#272A3C80] border-t-2 border-transparent"
            }`}
          >
            Softwares
          </button>
          <button
            onClick={() => setActiveTab("aiAutomations")}
            className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
              activeTab === "aiAutomations"
                ? "bg-[#272A3C80] text-primary border-t-2 border-light"
                : "text-light bg-[#272A3C80] border-t-2 border-transparent"
            }`}
          >
            AI Automations
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
              activeTab === "marketing"
                ? "bg-[#272A3C80] text-primary border-t-2 border-light"
                : "text-light bg-[#272A3C80] border-t-2 border-transparent"
            }`}
          >
            Marketing
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-[#1a1c33] rounded-lg p-6 shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(service.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered entrance
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {service.images && service.images.length > 0 ? (
                <Swiper
                  key={hoveredIndex === index ? `hovered-${index}` : `unhovered-${index}`}
                  pagination={{ clickable: true }}
                  autoplay={
                    hoveredIndex === index
                      ? { delay: 1000, disableOnInteraction: false }
                      : undefined // Set to undefined instead of false
                  }
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  className="mb-6 rounded-lg overflow-hidden"
                >
                  {service.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={image}
                        alt={`${service.title} Image ${imgIndex + 1}`}
                        className="rounded-lg h-[200px] w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="h-[200px] w-full bg-gray-200 rounded-lg mb-6"></div>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-left text-light">
                {service.title}
              </h3>
              <p className="text-light mb-4 text-left">{service.description}</p>
              <button className="flex items-center text-primary font-semibold">
                <span>View All </span>
                <MoveUpRight className="ml-1 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
