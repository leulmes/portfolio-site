"use client";
import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";

const AnimatedBurger = () => {
	const [active, setActive] = useState(false);

	return (
		<MotionConfig
			transition={{
				duration: 0.3,
				ease: "easeInOut",
			}}
		>
			<motion.button
				initial={false}
				onClick={() => setActive((pv) => !pv)}
				className="relative h-20 w-20 rounded-full cursor-pointer"
				animate={active ? "open" : "closed"}
			>
				<motion.span
					style={{
						left: "50%",
						top: "35%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-1 w-10 bg-white rounded border"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
						},
					}}
				></motion.span>
				<motion.span
					style={{
						left: "50%",
						top: "50%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-1 w-10 bg-white rounded border"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
						},
					}}
				></motion.span>
				<motion.span
					style={{
						left: "50%",
						bottom: "35%",
						x: "-50%",
						y: "50%",
					}}
					className="absolute h-1 w-10 bg-white rounded border"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
							bottom: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
							bottom: ["50%", "50%", "35%"],
						},
					}}
				></motion.span>
			</motion.button>
		</MotionConfig>
	);
};

export default AnimatedBurger;
