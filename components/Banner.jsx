import React from "react";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Banner() {
	const motionVariantsText = {
		initial: { opacity: 0, y: -60 },
		whileInView: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 60 },
		transition: {
			duration: 0.5,
			delay: 0.2,
			scale: {
				type: "spring",
				damping: 14,
				stiffness: 200,
				restDelta: 0.001,
			},
		},
	};

	const motionVariantsImage = {
		initial: { opacity: 0, scale: 0.8 },
		whileInView: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.8 },
		transition: {
			duration: 0.5,
			delay: 0.4,
			scale: {
				type: "spring",
				damping: 10,
				stiffness: 150,
				restDelta: 0.001,
			},
		},
	};

	const motionVariantsButton = {
		initial: { opacity: 0, scale: 0.8 },
		whileInView: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.8 },
		transition: {
			duration: 0.4,
			delay: 0.6,
			scale: {
				type: "spring",
				damping: 10,
				stiffness: 150,
			},
		},
	};


	const router = useRouter();


	return (
		<div>
			<Navbar />
			<div className="bg-[#000319] lg:h-screen lg:py-0 py-28 flex items-center" id="home">
				<div className="container mx-auto lg:flex lg:items-center lg:justify-between lg:space-x-12 lg:w-[80%] p-4">
					<motion.div className="lg:w-[50%] flex flex-col space-y-6" {...motionVariantsText}>
						<h1 className="text-light font-semibold lg:text-4xl text-2xl">
							Hi ! I’m <span className="text-primary">Hardik Vij</span>
						</h1>
						<p className="text-light lg:text-lg text-base max-w-2xl">
							I excel at crafting elegant digital experiences and I am proficient in various{" "}
							<span className="text-primary">programming languages</span> and{" "}
							<span className="text-primary">technologies.</span>
						</p>
						<div className="flex lg:space-x-6 space-x-4">
							<motion.button
								className="flex px-6 items-center justify-center rounded-md bg-gradient-to-l from-[#6971A2] to-[rgba(39,42,60,0.5)] py-2 text-white gap-2 font-medium"
								{ ...motionVariantsButton }
								onClick={()=>router.push("#projects")}
							>
								Latest Projects
							</motion.button>
							<motion.a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Whatsapp"
								{...motionVariantsButton}
							>
								<img src="/about/social-media/whatsapp.png" className="w-12 h-12" />
							</motion.a>
							<motion.a
								href=""
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Phone"
								{...motionVariantsButton}
							>
								<img src="/about/social-media/call.png" className="w-12 h-12" />
							</motion.a>
						</div>
					</motion.div>

					<motion.div className="lg:w-[35%] w-full lg:mt-0 mt-12" {...motionVariantsImage}>
						<img src="/hardik.png" className="h-[300px]" />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
