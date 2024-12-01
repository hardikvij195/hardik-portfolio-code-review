import AnotherNavbar from "@/components/AnotherNavbar/AnotherNavbar";
import { MoveLeft, Star, StepBack } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

function Index() {
	const router = useRouter();
	return (
		<div id="services">
			<AnotherNavbar />

			<div className=" text-light lg:py-32 py-28 px-4 lg:px-16">
				<MoveLeft
					className="mb-6 cursor-pointer"
					onClick={() => router.back()}
				/>
				<div className="max-w-3xl mx-auto">
					{/* Header */}
					<h1 className="text-center lg:text-3xl text-2xl font-semibold mb-4 leading-tight">
						I will build or rebuild website Development as Full
						Stack Developer and design website
					</h1>

					{/* Image */}
					<div className="my-8 rounded-lg overflow-hidden">
						<img
							src="/services/website.png"
							alt="Web Development"
							className="w-full h-auto"
						/>
					</div>

					{/* Description */}
					<p className="mb-8 text-light">
						Hello Buddy! <br />
						<br />
						Are you looking for a professional and experienced
						website designer and developer to bring your ideas to
						life? Look no further! I am here to provide top-notch
						website design and development services tailored to meet
						your unique needs.
					</p>

					{/* Services Offered */}
					<h3 className="text-2xl font-semibold mb-4">
						Services <span className="text-primary">Offered:</span>
					</h3>
					<ul className="list-disc list-inside mb-8 space-y-2 text-light">
						<li>Figma to Website Conversion</li>
						<li>Custom Website Development</li>
						<li>Frontend development with React.js</li>
						<li>Backend development, Rest API creation</li>
						<li>Integrate APIs</li>
						<li>Responsive Design with Mobile Optimization</li>
						<li>
							SEO Optimization (Advanced + Google Analytics Setup)
						</li>
						<li>E-commerce Functionality (if needed)</li>
						<li>Priority Support</li>
						<li>24/7 ongoing support</li>
					</ul>

					{/* Contact and Profile */}
					<div className="bg-[#1a1c33] rounded-lg p-6 mb-8">
						<div className="flex items-center space-x-4 mb-4">
							<img
								src="/hardik.png"
								alt="Hardik"
								className="w-28 h-28 rounded-full"
							/>
							<div className="space-y-1">
								<p className="font-semibold text-xl">
									Hardik Vij
								</p>
								<p className="text-light text-sm">
									Your trusted web application developer
								</p>
								<div className="flex items-center text-yellow-400">
									<Star
										fill="currentColor"
										className="w-4 h-4 mr-1"
									/>{" "}
									5.0
								</div>
							</div>
						</div>
						<div className="lg:flex  lg:flex-row lg:items-center lg:justify-center lg:space-x-8 lg:space-y-0 flex flex-col space-y-3">
							<button
								className="w-full bg-primary/50 text-white py-2 rounded-full "
								onClick={() => router.push("/#contact-us")}
							>
								Contact me
							</button>
							<button className="w-full bg-transparent border border-primary text-primary py-2 rounded-full">
								Request a Consultation
							</button>
						</div>
					</div>

					{/* Compare Packages */}
					<div className="bg-[#1a1c33] rounded-lg p-6 mb-8">
						<h3 className="text-xl font-semibold mb-4">
							Compare{" "}
							<span className="text-primary">Packages</span>
						</h3>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left text-light">
							<div className="p-4 bg-[#272A3C80] rounded-lg">
								<h4 className="font-semibold mb-2">Basic</h4>
								<p className="text-primary font-bold mb-2 text-xl">
									$1,074
								</p>
								<p className="text-sm">
									Basic website with essential features
								</p>
							</div>
							<div className="p-4 bg-[#272A3C80] rounded-lg">
								<h4 className="font-semibold mb-2">Standard</h4>
								<p className="text-primary font-bold mb-2 text-xl">
									$1,849
								</p>
								<p className="text-sm">
									Enhanced website with additional
									functionality
								</p>
							</div>
							<div className="p-4 bg-[#272A3C80] rounded-lg">
								<h4 className="font-semibold mb-2">Premium</h4>
								<p className="text-primary font-bold mb-2 text-xl">
									$2,497
								</p>
								<p className="text-sm">
									High-performance website with all features
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
