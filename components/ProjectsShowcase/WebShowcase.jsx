import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; 
import "swiper/css";
import "swiper/css/pagination";
import Apple from "../common/Icons/Apple";
import { ExternalLink } from "lucide-react";

const WebShowcase = () => {
	return (
		<div className="bg-dark-blue text-white py-16 px-4 poppins-text overflow-hidden">
			<div className="container mx-auto max-w-6xl space-y-32">
				{/* MingleWise Section */}
				<Section
					title="MingleWise"
					description="World’s first all-in-one AI-driven app for dating, networking & events."
					images={[
						"/services/minglewise.png",
						"/services/minglewise.png",
						"/services/minglewise.png",
					]}
					buttons={[{ href: "https://minglewise.com/" }]}
					reverse={false}
				/>

				{/* Sustainability Ledger Section */}
				<Section
					title="Sustainability Ledger"
					description="Sustainability Ledger is an app that helps households and small businesses track their resource usage."
					images={["/services/emp.png", "/services/emp.png"]}
					buttons={[{ href: "https://sustainabilityledger.au/" }]}
					reverse={true}
				/>

				{/* Property Dictionary Section */}
				<Section
					title="Property Dictionary"
					description="Property Dictionary is your go-to property dictionary app, offering a collection of listings with comprehensive details."
					images={[
						"/services/property-dictionary.png",
						"/services/property-dictionary.png",
						"/services/property-dictionary.png",
					]}
					buttons={[{ href: "https://propertydictionary.in/" }]}
					reverse={false}
				/>
			</div>
		</div>
	);
};

const Section = ({ title, description, images, buttons, reverse }) => {
	return (
		<motion.div
			className={`flex flex-col-reverse ${
				reverse ? "md:flex-row-reverse" : "md:flex-row"
			} items-center md:space-x-8 md:space-x-reverse space-y-8 md:space-y-0`}
			initial={{ opacity: 0, x: reverse ? 100 : -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: false }}
			transition={{ duration: 0.8 }}
		>
			{/* Text Content */}
			<motion.div
				className="text-center md:text-left md:w-1/2 px-4 md:px-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				viewport={{ once: false }}
			>
				<h2 className="text-2xl md:text-4xl font-bold mb-4 md:mt-0 mt-3">
					{title}
				</h2>
				<p className="text-sm md:text-lg mb-6">{description}</p>
				<div className="flex items-center justify-center md:justify-start md:gap-8">
					{buttons.map((button, index) => (
						<motion.div
							key={index}
							className="cursor-pointer flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-[#6971A2] to-[rgba(39,42,60,0.5)]  text-white font-medium py-2.5 px-7"
							onClick={() => window.open(button.href, "_blank")}
							initial={{ scale: 0.95 }}
							whileInView={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
							viewport={{ once: false }}
						>
							Visit Site <ExternalLink />
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Image Swiper */}
			<motion.div
				className="md:w-1/2 w-full"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.8 }}
				viewport={{ once: false }}
			>
				<Swiper
					modules={[Autoplay, Pagination]}
					autoplay={{ delay: 5000 }}
					pagination={{ clickable: true }}
					spaceBetween={20}
					slidesPerView={1}
					className="rounded-lg overflow-hidden shadow-lg"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								src={image}
								alt={`${title} screenshot ${index + 1}`}
								className="w-full h-auto rounded-md"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</motion.div>
	);
};

export default WebShowcase;
