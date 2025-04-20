"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DropdownSheet from "./components/DropdownSheet";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import ContactPage from "./components/ContactPage";

export default function Home() {
	const [menu, setMenu] = useState(false);

	// if menu is toggled
	useEffect(() => {
		if (menu) {
			document.body.style.overflow = "hidden"; // hides overflow content + removes scrollbar
		} else {
			document.body.style.overflow = ""; // shows scrollbars
		}
		// cleanup function
		return () => {
			document.body.style.overflow = ""; // shows scrollbars
		}
	}, [menu]);

	return (
		<div className="">
			<Navbar menu={menu} setMenu={setMenu} />
			<div className="">
				<AnimatePresence>
					{menu && (
						<div className="fixed z-10 w-full h-screen">
							<DropdownSheet menu={menu} setMenu={setMenu} />
						</div>
					)}
				</AnimatePresence>

				<div className=''>
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
					<div id="second-section" className="flex flex-col items-center">
						<h1 className="text-white font-kumbh font-bold text-7xl  mb-10 pt-14">
							Experience
						</h1>
						<ExperienceCard
							company={"Panda Programmer"}
							role={"Lead Coding Instructor"}
							timeframe={"Dec 2024 - Present"}
							imageHref={"/panda.png"}
							location={"Silver Spring - Bethesda, MD"}
						/>
					</div>
					<div id="third-section" className="flex flex-col items-center">
						<h1 className="text-white font-kumbh font-bold text-7xl  mb-10 pt-14">
							Projects
						</h1>
						<div className="flex flex-col gap-28 items-center">
							<ProjectCard
								name={"Music Transfer"}
								techStack={"TypeScript, React, Java, Spring Boot, TailwindCSS"}
								description={
									"Crafted a web app that transfers Spotify playlists to Apple Music."
								}
								imageHref={"/musicTransfer.jpg"}
								demoLink={"https://www.youtube.com/watch?v=wukNB-JNbXw"}
								githubLink={"https://github.com/leulmes/playlist-transfer"}
							/>

							<ProjectCard
								name={"Gainz"}
								techStack={
									"React Native, TypeScript, Python, AWS DynamoDB, AWS Lambda, Clerk"
								}
								description={
									"Co-developed a social media and fitness mobile application."
								}
								imageHref={"/gainz.png"}
								demoLink={"https://www.youtube.com/watch?v=iAC8FYCfB2A"}
								githubLink={"https://github.com/kushaldevv/gainzApp"}
							/>
							<ProjectCard
								name={"TerpExchange"}
								techStack={"Swift, Google Firebase"}
								description={
									"Co-developed a mobile marketplace enabling UMD students to buy and sell products."
								}
								imageHref={"/terpExchange.jpg"}
								demoLink={"https://www.youtube.com/watch?v=CR91i9f5n8U"}
								githubLink={"https://github.com/kushaldevv/terpXchange"}
							/>
						</div>
					</div>
					<div id="fourth-section" className="flex flex-col items-center">
						<h1 className="text-white font-kumbh font-bold text-7xl  mb-10 pt-14">
							Contact
						</h1>
						<ContactPage />
					</div>
				</div>
			</div>
		</div>
	);
}
