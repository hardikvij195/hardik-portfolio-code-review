// components/TestimonialsCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    message: "Hardik's work is outstanding. He provided exactly what we needed and delivered ahead of schedule. Truly impressed by his dedication.",
    name: "Asim Namre",
    title: "Property Dictionary",
    image: "/user.png", 
  },
  {
    message: "Hardik's work is outstanding. He provided exactly what we needed and delivered ahead of schedule. Truly impressed by his dedication.",
    name: "Ashiq Aalli",
    title: "Sign N Drive",
    image: "/user.png", 
  },
  {
    message: "Hardik's helped us take our website to the next level. His insights were invaluable, and his execution was flawless. Highly recommend him!",
    name: "Eric",
    title: "Sustainability Ledger",
    image: "/user.png", 
    },
   {
    message: "Hardik's helped us take our website to the next level. His insights were invaluable, and his execution was flawless. Highly recommend him!",
    name: "Musa",
    title: "Hola Home",
    image: "/user.png", 
  },
  
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-12 bg-[#0f0f25] text-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
        Kind words from <span className="text-purple-400">satisfied clients</span>
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-5xl mx-auto px-4"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1c1c3b] p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <p className="text-sm md:text-base mb-4 text-gray-200 leading-relaxed">
                {testimonial.message}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsCarousel;
