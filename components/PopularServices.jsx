import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/pagination";

const services = [
  { id: "dating-app", title: "Dating App Development", description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.", images: ["/popular-services/dating-app.png"] },
  { id: "make-com", title: "Make.com Automations Setup", description: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.", images: ["/popular-services/automation.png"] },
  { id: "property-listing", title: "Property Listing & Lead Generation Platform", description: "Simplify your video conferencing experience with Yoam, seamlessly connect with colleagues and friends.", images: ["/popular-services/property-listing.png"] },
  { id: "gohighlevel", title: "GoHighLevel Setup with Fb Lead Gen Campaigns", description: "Recreated the Apple iPhone 13 Pro website, combining GSAP animations and Three.js 3D effects.", images: ["/popular-services/go.png"] },
];

export default function PopularServices() {
  const router = useRouter();

  // Parent animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  // Child animation for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#000319] text-white py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-semibold mb-8 text-light">
          Popular <span className="text-primary">Services</span>
        </h2>

        {/* Add motion.div as parent container for staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 container mx-auto lg:w-[85%]"
          initial="hidden" // Initial state
          whileInView="visible" // Trigger animation on view
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
          variants={containerVariants} // Parent variants
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-[#1a1c33] rounded-lg p-6 shadow-lg"
              variants={cardVariants} // Child variants
            >
              {service.images && service.images.length > 0 && (
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
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
              )}
              <h3 className="text-2xl font-semibold mb-2 text-left text-white">{service.title}</h3>
              <p className="text-light mb-4 text-left">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
