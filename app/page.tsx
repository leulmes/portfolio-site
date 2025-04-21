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
import GithubIcon from "./components/GithubIcon";
import DemoIcon from "./components/DemoIcon";

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
		};
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

				<div className="">
					<div
						id="first-section"
						className="flex flex-col items-center justify-center font-main text-white"
					>
						<Image
							src="ghibli.jpeg"
							width={250}
							height={200}
							alt="Picture of the author"
							className="rounded-full mb-4 mt-6"
						/>
						<h1 className="text-2xl text-center">
							Selam (ሰላም), I&apos;m Leul 👋🏾
						</h1>
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
					<div id="third-section" className="flex flex-col">
						<div className="max-w-[36rem] ml-3 mr-3">
							<h1 className="text-white font-kumbh font-bold text-4xl pt-14">
								Music Transfer
							</h1>
							<div className="flex gap-1">
								<span className="text-sm font-medium text-white">
									TypeScript,{" "}
								</span>
								<span className="text-sm font-medium text-white">React, </span>
								<span className="text-sm font-medium text-white">Java, </span>
								<span className="text-sm font-medium text-white">
									Spring Boot,{" "}
								</span>
								<span className="text-sm font-medium text-white">
									Tailwind CSS
								</span>
							</div>
							<div className="mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white">
									Crafted a React web app that transfers my Spotify playlists to Apple
									Music.
								</p>
							</div>
							<div className="flex items-center my-3 space-x-5">
								<Link
									href="https://www.youtube.com/watch?v=wukNB-JNbXw"
									className=""
									rel="noopener noreferrer"
									target="_blank"
								>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95, rotate: "0deg" }}
										className="cursor-pointer rounded bg-white  text-black text-sm"
									>
										<DemoIcon />
									</motion.button>
								</Link>
								<Link
									href="https://github.com/leulmes/playlist-transfer"
									className=""
									rel="noopener noreferrer"
									target="_blank"
								>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95, rotate: "0deg" }}
										className="cursor-pointer text-white "
									>
										<GithubIcon />
									</motion.button>
								</Link>
							</div>
						</div>
						<div className="relative aspect-video w-full max-w-[36rem]">
							<Image
								src="/musicTransfer.jpg"
								width={400}
								height={350}
								alt="mt"
								className="rounded-2xl m-auto"
							></Image>
						</div>

						{/* <div className="flex flex-col gap-28 items-center">
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
						</div> */}
					</div>
					<div id="fourth-section" className="flex flex-col items-center">
						<h1 className="text-white font-main font-bold text-4xl pt-14">
							Contact
						</h1>
						<h2 className="text-white font-main mt-3 mb-5">Let's get in touch!</h2>
						<ContactPage />
					</div>
				</div>
			</div>
		</div>
	);
}
