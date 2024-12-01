import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
	const motionVariantsText = {
		initial: { opacity: 0, x: -60 },
		whileInView: { opacity: 1, x: 0 },
		transition: { duration: 0.6, type: "spring", stiffness: 120 },
	};

	const motionVariantsImage = {
		initial: { opacity: 0, scale: 0.8 },
		whileInView: { opacity: 1, scale: 1 },
		transition: { duration: 0.6, type: "spring", stiffness: 100 },
	};

	const motionVariantsIcon = {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.4, type: "spring", stiffness: 100 },
	};

	return (
		<div
			id="about-me"
			className="bg-[#000319] bg-cover bg-center lg:h-screen flex items-center justify-center"
			style={{
				backgroundImage: "url('/about/bg.png')",
			}}
		>
			<div className="container mx-auto lg:flex lg:items-center lg:justify-between lg:space-x-12 lg:w-[80%] p-4">
				<motion.div
					className="lg:w-[50%] flex flex-col space-y-6"
					{...motionVariantsText}
				>
					<h2 className="text-primary font-semibold lg:text-4xl text-2xl">
						About <span className="text-light">me</span>
					</h2>
					<h3 className="text-primary font-semibold lg:text-2xl text-xl">
						Full Stack Software Developer & AI Automations
						Specialist
					</h3>
					<p className="text-light lg:text-lg text-base">
						Proficient in crafting robust, scalable, and
						user-centric web applications from the ground up.
						Leverages cutting-edge AI and machine learning
						techniques to automate complex tasks and streamline
						processes. Well-versed in a wide range of programming
						languages, frameworks, and tools to deliver efficient
						and innovative solutions.
					</p>
					<div className="flex lg:space-x-12 space-x-4">
						{[
							{
								href: "https://facebook.com",
								src: "/about/social-media/facebook.png",
								alt: "Facebook",
							},
							{
								href: "https://github.com",
								src: "/about/social-media/github.png",
								alt: "GitHub",
							},
							{
								href: "https://linkedin.com",
								src: "/about/social-media/linkedin.png",
								alt: "LinkedIn",
							},
							{
								href: "https://instagram.com",
								src: "/about/social-media/instagram.png",
								alt: "Instagram",
							},
						].map((icon, index) => (
							<motion.a
								key={index}
								href={icon.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={icon.alt}
								{...motionVariantsIcon}
							>
								<img src={icon.src} className="w-12 h-12" alt={icon.alt} />
							</motion.a>
						))}
					</div>
				</motion.div>

				<motion.div
					className="lg:w-[40%] w-full"
					{...motionVariantsImage}
				>
					<img src="/about/banner.png" className="" alt="About Me Banner" />
				</motion.div>
			</div>
		</div>
	);
}

export default AboutMe;
