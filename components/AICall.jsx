import { PauseCircleIcon, PlayCircleIcon } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
const services = [
	{
		id: "car-dealership",
		title: "Car Dealership AI Audio Call",
		description: "AI-powered calls for a smarter car buying experience.",
		audio: "/recording.wav",
	},
	{
		id: "apartment-booking",
		title: "Apartment Booking AI Audio Call",
		description: "Utilize AI for a seamless apartment booking experience.",
		audio: "/recording1.wav",
	},
	{
		id: "consultancy-services",
		title: "Consultancy Services AI Audio Call",
		description:
			"We utilize AI technology to deliver innovative consulting solutions.",
		audio: "/recording2.wav",
	},
];

export default function AICall() {
	const [currentAudio, setCurrentAudio] = useState(null);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef(null);

	const handlePlayPause = (audioSrc) => {
		if (currentAudio === audioSrc) {
			if (audioRef.current.paused) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		} else {
			if (audioRef.current) {
				audioRef.current.pause();
			}
			const audio = new Audio(audioSrc);
			audioRef.current = audio;
			setCurrentAudio(audioSrc);

			audio.play();
			audio.addEventListener("timeupdate", () => {
				setCurrentTime(audio.currentTime);
				setProgress((audio.currentTime / audio.duration) * 100 || 0);
			});
			audio.addEventListener("loadedmetadata", () => {
				setDuration(audio.duration);
			});
			audio.addEventListener("ended", () => {
				setCurrentAudio(null);
				setProgress(0);
				setCurrentTime(0);
			});
		}
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<section className="bg-[#000319] text-white py-16 px-4">
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
					Expert in <span className="text-primary">AI Call</span>
				</motion.h2>
				<motion.p
					className="text-light max-w-3xl mx-auto mb-8 lg:text-lg text-sm"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.2,
						type: "spring",
						stiffness: 80,
					}}
				>
					Our AI calling technology empowers our services by enabling
					personalized interactions and data-driven insights. We
					utilize AI calling to provide 24/7 customer support,
					automate routine tasks, and improve overall service
					delivery.
				</motion.p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-[#1c1c3b] rounded-lg p-3 shadow-md "
						>
							<div className="mb-6 flex flex-col  p-3">
								<div className="flex items-center justify-center bg-gradient-to-r from-[#6971A2] to-[#272A3C] rounded-lg h-32 mb-9 mx-12">
									<img
										src="/music.svg"
										className="w-12 h-12"
									/>
								</div>
								<div className="relative h-2 bg-gray-700 rounded-full mb-4">
									<div
										className="absolute h-full bg-[#6c63ff] rounded-full"
										style={{
											width: `${
												currentAudio === service.audio
													? progress
													: 0
											}%`,
										}}
									></div>
								
									<div className="absolute text-xs text-gray-400 -top-6 left-0">
										{formatTime(
											currentAudio === service.audio
												? currentTime
												: 0,
										)}
									</div>
									<div className="absolute text-xs text-gray-400 -top-6 right-0">
										{formatTime(
											currentAudio === service.audio
												? duration
												: 300,
										)}
									</div>
								</div>

								<button
									onClick={() =>
										handlePlayPause(service.audio)
									}
									className={`  text-white  flex items-center justify-center shadow-md transform hover:scale-105 transition-transform ${
										currentAudio === service.audio ? "" : ""
									}`}
								>
									{currentAudio === service.audio &&
									audioRef.current &&
									!audioRef.current.paused ? (
										<PauseCircleIcon size={40} />
									) : (
										<PlayCircleIcon size={40} />
									)}
								</button>
							</div>
							<h3 className="text-xl lg:text-2xl text-left font-bold mb-2 px-3">
								{service.title}
							</h3>
							<p className="text-light mb-6 text-left px-3 lg:text-base text-md">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
