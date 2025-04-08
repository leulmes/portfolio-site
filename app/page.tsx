"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DropdownSheet from "./components/DropdownSheet";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
	const [active, setActive] = useState(false);

	return (
		<div className="">
			<Navbar active={active} setActive={setActive} />
			<div className="relative h-screen">
				<div className="absolute z-10 w-screen">
					<AnimatePresence>{active ? <DropdownSheet /> : null}</AnimatePresence>
				</div>

				<div
					id="first-section"
					className="flex flex-col items-center justify-center font-main text-white"
				>
					<Image
						src="/ghibli.jpeg"
						width={250}
						height={200}
						alt="Picture of the author"
						className="rounded-full mb-4 mt-6"
					/>
					<h1 className="text-2xl text-center">Selam (ሰላም), I'm Leul 👋🏾</h1>
					<h2 className="text-lg text-center">
						Software Developer & Coding Instructor
					</h2>
					<h3 className="text-base text-center">
						just solving problems with software...😉
					</h3>

					<Link href="#second-section">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95, rotate: "0deg" }}
							className="cursor-pointer bg-white text-[#181818] rounded border mt-4"
						>
							<ArrowDown />
						</motion.button>
					</Link>
				</div>
				<div id="second-section" className="">
					<h1 className="text-white font-kumbh font-bold text-7xl flex justify-center mb-10 pt-14">
						Experience
					</h1>
				</div>
			</div>
		</div>
	);
}
