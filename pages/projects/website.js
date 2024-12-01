import React, { useState } from "react";
import AnotherNavbar from "@/components/AnotherNavbar/AnotherNavbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import WebShowcase from "@/components/ProjectsShowcase/WebShowcase";
function Index() {
	const [activeTab, setActiveTab] = useState("website");

	const router = useRouter();

	return (
		<div id="projects" className="pb-12">
			{" "}
			<AnotherNavbar />
			<div className="flex justify-center mt-28 mb-12 space-x-4  bg-[#000319] z-50">
				<button
					onClick={() => router.push("/projects/app")}
					className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
						activeTab === "app"
							? "bg-[#272A3C80] text-primary border-t-2 border-light"
							: "text-light bg-[#272A3C80] border-t-2 border-transparent"
					}`}
				>
					Apps
				</button>
				<button
					onClick={() => router.push("/projects/website")}
					className={`py-2 lg:px-6 px-3 rounded-full lg:text-base text-xs ${
						activeTab === "website"
							? "bg-[#272A3C80] text-primary border-t-2 border-light"
							: "text-light bg-[#272A3C80] border-t-2 border-transparent"
					}`}
				>
					Website
				</button>
			</div>
			<WebShowcase />
		</div>
	);
}

export default Index;
