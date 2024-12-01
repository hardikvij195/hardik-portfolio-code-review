import { useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { ExternalLink, Star } from "lucide-react";

const services = {
	softwares: [
		{
			id: "website",
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
			id: "website",
			title: "Admin Panel",
			price: "$1100",
			description:
				"I will build a mobile app development, iOS app, Android app responsive design",
			rating: "5.0",
			images: ["/services/jcw.png", "/services/minglewise.png"],
		},
	],
	ai_Automations: [
		{
			id: "website",
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
			id: "website",
			title: "SEO Services",
			price: "$500",
			description:
				"I will optimize your website for search engines to improve rankings",
			rating: "5.0",
			images: ["/services/minglewise.png", "/services/minglewise.png"],
		},
	],
};

const tabLabels = {
	softwares: "Softwares",
	ai_Automations: "AI Automations",
	marketing: "Marketing",
};

export default function ServiceSection() {
	const [activeTab, setActiveTab] = useState("softwares");
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const router = useRouter();

	const renderServices = services[activeTab] || [];

	const handleCardClick = (id) => {
		router.push(`/services/${id}`);
	};

	return (
		<section
			className="bg-[#000319] text-white pt-28 pb-16 px-4"
			id="services"
		>
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					className="lg:text-4xl text-2xl font-semibold mb-4 text-light"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
						type: "spring",
						stiffness: 80,
					}}
				>
					What do I <span className="text-primary">offer?</span>
				</motion.h2>
				<motion.p
					className="text-light max-w-xl mx-auto mb-8 lg:text-lg text-sm"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.2,
						type: "spring",
						stiffness: 80,
					}}
				>
					Must explain to you how all this mistaken idea of denouncing
					pleasure born and give you a complete account the system
				</motion.p>

				{/* Tab Buttons */}
				<div className="flex justify-center mb-12 space-x-4">
					{Object.keys(services).map((key) => (
						<motion.button
							key={key}
							onClick={() => setActiveTab(key)}
							className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
								activeTab === key
									? "bg-[#272A3C80] text-primary border-t-2 border-light"
									: "text-light bg-[#272A3C80] border-t-2 border-transparent"
							}`}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{tabLabels[key] || key}
						</motion.button>
					))}
				</div>

				{/* Service Cards */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: {
							opacity: 1,
							scale: 1,
							transition: { staggerChildren: 0.1 },
						},
					}}
				>
					{renderServices.map((service, index) => (
						<motion.div
							key={service.id}
							className="bg-[#1a1c33] rounded-lg p-6 shadow-lg cursor-pointer"
							whileHover={{ scale: 1.05 }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							onClick={() => handleCardClick(service.id)}
						>
							{service.images && service.images.length > 0 ? (
								<Swiper
									key={
										hoveredIndex === index
											? `hovered-${index}`
											: `unhovered-${index}`
									}
									pagination={{ clickable: true }}
									autoplay={
										hoveredIndex === index
											? {
													delay: 1000,
													disableOnInteraction: false,
											  }
											: false
									}
									modules={[Pagination, Autoplay]}
									loop={true}
									className="mb-6 rounded-lg overflow-hidden"
								>
									{service.images.map((image, imgIndex) => (
										<SwiperSlide key={imgIndex}>
											<img
												src={image}
												alt={`${service.title} Image ${
													imgIndex + 1
												}`}
												className="rounded-lg h-[200px] w-full object-cover"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							) : (
								<div className="h-[200px] w-full bg-gray-200 rounded-lg mb-6"></div>
							)}
							<div className="flex items-center mb-2 justify-between hover:text-primary">
								{" "}
								<h3 className="text-2xl font-semibold  text-left text-light hover:text-primary hover:underline">
									{service.title}
                </h3>
                <div><ExternalLink size={20}/></div>
							</div>

							<p className="text-light mb-4 text-left">
								{service.description}
							</p>
							<div className="flex flex-col items-start space-y-2">
								<span className="text-light flex items-center space-x-2">
									<Star fill="white" />{" "}
									<p className="text-light">
										{service.rating}
									</p>
								</span>
								<span className="text-primary font-semibold text-lg">
									From {service.price}
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
