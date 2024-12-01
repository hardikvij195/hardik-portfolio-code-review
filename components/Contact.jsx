/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TextInput from "./InputFields/TextInput";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isVerified, setIsVerified] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		setIsSubmitting(true);

		const payload = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			phoneNumber: `+${data.phoneNumber}`,
			companyName: data.companyName,
			message: data.message,
		};

		try {
			const response = await axios.post(
				"",
				payload,
			);
			// console.log("Webhook response:", response.data);

			reset();
			toast.success("Message sent successfully!");
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCaptchaChange = (value) => {
		setIsVerified(!!value);
	};
	return (
		<div className="w-full mt-10 pt-28 pb-4" id="contact-us">
			<div className="container mx-auto flex flex-col lg:flex-row justify-center items-start w-full h-full gap-10">
				<div className="w-full lg:w-[50%]">
					<div className="w-[95%] md:w-[80%] mx-auto space-y-3">
						<motion.h2
							className="text-2xl sm:text-3xl text-center md:text-start md:text-5xl text-primary font-semibold"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							Get in touch
						</motion.h2>
						<motion.p
							className="text-white/70 text-base text-center md:text-start"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							I'm always excited to take on new projects and
							collaborate with innovative minds. If you have a
							project in mind or just want to chat about design,
							feel free to reach out.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={ { duration: 1, delay: 0.2 } }
							className="flex items-center gap-6 py-3"
						>
							<img src="/contact/phone.svg" />
							<div className="flex flex-col">
								<h1 className="text-gray-500 font-semibold ">Phone Number</h1> <h2 className="text-light">831483467384</h2>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={ { duration: 1, delay: 0.2 } }
							className="flex items-center gap-6 py-3"
						>
							<img src="/contact/email.svg" />
							<div className="flex flex-col">
								<h1 className="text-gray-500 font-semibold ">Email</h1> <h2 className="text-light">email@ok.com</h2>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={ { duration: 1, delay: 0.2 } }
							className="flex items-center gap-6 py-3"
						>
							<img src="/contact/address.svg" />
							<div className="flex flex-col">
								<h1 className="text-gray-500 font-semibold ">Address</h1> <h2 className="text-light">gdrjgb </h2>
							</div>
						</motion.div>
					</div>
				</div>
				<div className="w-[100%] lg:w-[567px] shadow-lg rounded-2xl">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-5 p-4 md:p-8 bg-[#1a1c33] rounded-2xl"
					>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<p className="text-xl font-medium text-light">
								Leave a Message
							</p>
						</motion.div>

						<div className="w-full space-y-3 md:space-y-0 gap-4 md:flex justify-between items-center">
							<div className="w-full lg:w-1/2">
								<Controller
									name="firstName"
									control={control}
									defaultValue=""
									rules={{
										required: "First name is required",
									}}
									render={({ field }) => (
										<TextInput
											label="First name"
											placeholder="First name"
											{...field}
											required
											className={
												"w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm bg-[#000319] text-light" +
												(errors.firstName ? "" : "")
											}
										/>
									)}
								/>
								{errors.firstName && (
									<p className="text-red-500 text-sm">
										{errors.firstName.message}
									</p>
								)}
							</div>

							<div className="w-full lg:w-1/2">
								<Controller
									name="lastName"
									control={control}
									defaultValue=""
									rules={{
										required: "Last name is required",
									}}
									render={({ field }) => (
										<TextInput
											label="Last name"
											placeholder="Last name"
											{...field}
											required
											className={
												"w-full px-3 py-2 bg-[#000319] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm text-light" +
												(errors.lastName ? " " : "")
											}
										/>
									)}
								/>
								{errors.lastName && (
									<p className="text-red-500 text-sm">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						<div className="w-full">
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{
									required: "Email is required",
									validate: (value) =>
										/\S+@\S+\.\S+/.test(value) ||
										"Invalid email address",
								}}
								render={({ field }) => (
									<TextInput
										label="Email"
										placeholder="you@company.com"
										required
										{...field}
										className={
											"w-full px-3 py-2 bg-[#000319] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm text-light" +
											(errors.email ? " " : "")
										}
									/>
								)}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<label className="block text-white text-sm font-medium mb-2">
								Phone Number
							</label>
							<Controller
								name="phoneNumber"
								control={control}
								defaultValue=""
								rules={{
									required: "Phone number is required",
									validate: (value) =>
										value.length >= 10 ||
										"Invalid phone number",
								}}
								render={({ field: { onChange, value } }) => (
									<PhoneInput
										country={"us"}
										value={value}
										onChange={onChange}
										enableSearch
										inputClass="w-full bg-[#000319] text-white"
									/>
								)}
							/>
							{errors.phoneNumber && (
								<p className="text-red-500 text-sm">
									{errors.phoneNumber.message}
								</p>
							)}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<Controller
								name="companyName"
								control={control}
								defaultValue=""
								rules={{
									required: "Company Name is required",
								}}
								render={({ field }) => (
									<TextInput
										label="Subject"
										placeholder="xyz"
										required
										{...field}
										className={
											"w-full px-3 py-2 bg-[#000319] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm text-light" +
											(errors.companyName ? " " : "")
										}
									/>
								)}
							/>
							{errors.companyName && (
								<p className="text-red-500 text-sm">
									{errors.companyName.message}
								</p>
							)}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.9 }}
						>
							<Controller
								name="message"
								control={control}
								defaultValue=""
								rules={{ required: "Message is required" }}
								render={({ field }) => (
									<TextInput
										label="Message"
										type={"textarea"}
										placeholder="write a message"
										required
										{...field}
										className={
											"w-full px-3 py-2 h-32 resize-none bg-[#000319] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm text-light"
										}
									/>
								)}
							/>
							{errors.message && (
								<p className="text-red-500 text-sm">
									{errors.message.message}
								</p>
							)}
						</motion.div>
						<div className="flex items-center justify-center">
							<ReCAPTCHA
								sitekey=""
								onChange={handleCaptchaChange}
							/>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.1 }}
							className="mt-2 text-center"
						>
							<button
								type="submit"
								className="bg-gradient-to-l from-[#6971A2] to-[rgba(39,42,60,0.5)]  text-white font-medium px-6 py-3 rounded-xl w-full hover:scale-105 active:scale-95"
								disabled={!isVerified}
							>
								{isSubmitting ? "Sending..." : "Contact Now"}
							</button>
						</motion.div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
