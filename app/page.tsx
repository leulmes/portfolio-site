"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import DropdownSheet from "./components/DropdownSheet";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "./components/ExperienceCard";
import ContactPage from "./components/ContactPage";
import {
	GithubIcon,
	DemoIcon,
	LinkedinIcon,
	DownloadIcon,
} from "./components/SvgIcons";
import ScrollIntoView from "react-scroll-into-view";
import Footer from "./components/Footer";

export default function Home() {
	const [menu, setMenu] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// review this
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

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
		<div ref={ref} className="scroll-smooth">
			<Navbar menu={menu} setMenu={setMenu} />
			<div className="">
				<AnimatePresence>
					{menu && (
						<div className="fixed z-10 w-full h-screen">
							<DropdownSheet menu={menu} setMenu={setMenu} />
						</div>
					)}
				</AnimatePresence>

				<div className="md:flex md:flex-col md:justify-center md:items-center">
					<div
						id="first-section"
						className="flex flex-col items-center justify-center text-white mb-36"
					>
						<div className="flex items-center justify-center mb-4 mt-20">
							<div className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gray-300 via-gray-400 to-gray-600 opacity-70 animate-pulse"></div>
							<Image
								src="ghibli.jpeg"
								width={250}
								height={250}
								alt="Picture of the author"
								className="rounded-full"
								priority
							/>
						</div>
						<h1 className="flex text-3xl text-center font-main font-bold gap-1">
							<span>Selam (ሰላም),</span>
							<span>I&apos;m Leul</span>
							<span className="animate-wave">👋🏾</span>
						</h1>
						<h2 className="text-xl text-center font-main ">
							Software Dev. & Coding Instructor
						</h2>
						<h3 className="text-base text-center font-main">
							just coding my ideas into reality...
						</h3>

						<div className="flex items-center gap-5 mt-1">
							<Link
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95, rotate: "0deg" }}
									className="flex items-center border-1 rounded-3xl p-2 text-base cursor-pointer bg-white text-black border-black"
								>
									Resume <DownloadIcon />
								</motion.button>
							</Link>

							<Link
								href="https://www.linkedin.com/in/leul-mesfin"
								className="cursor-pointer"
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95, rotate: "0deg" }}
									className="flex items-center p-2 cursor-pointer"
								>
									<LinkedinIcon />
								</motion.button>
							</Link>
						</div>

						<ScrollIntoView selector="#second-section">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95, rotate: "0deg" }}
								className="cursor-pointer bg-white text-[#181818] rounded border mt-6 animate-bounce"
							>
								<ArrowDown />
							</motion.button>
						</ScrollIntoView>
					</div>
					<div
						id="second-section"
						className="flex flex-col items-center md:justify-center md:w-1/2"
					>
						<h1 className="text-white font-main font-bold text-5xl mb-10 mt-20">
							Experience
						</h1>
						<ExperienceCard
							company={"Panda Programmer"}
							role={"Lead Coding Instructor"}
							timeframe={"Dec. 2024 - Present"}
							imageHref={"/panda.png"}
							location={"Silver Spring - Bethesda, MD"}
						/>
					</div>
					<div id="third-section" className="flex flex-col">
						<div className="max-w-[36rem] ml-3 mr-3 mt-5 ">
							<h1 className="text-white font-main font-bold text-4xl pt-14">
								The Iron Skillet
							</h1>
							<div className="flex gap-1 text-sm font-medium text-white">
								<span className="">React,</span>
								<span className="">TypeScript,</span>
								<span className="">Tailwind CSS,</span>
								<span className="">Loveable</span>
							</div>
							<div className="mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white font-main">
									Developed a fully responsive, visually engaging website for
									The Iron Skillet Steakhouse. Contributed to increased
									reservation rates and enhanced online visibility.
								</p>
							</div>
						</div>
						<div className="max-w-[36rem] mt-2 mr-3 ml-3">
							<Image
								src="/ironSkillet.jpeg"
								width={600}
								height={350}
								alt="mt"
								className="rounded-2xl"
							></Image>
							<div className="flex items-center my-3 space-x-5 ml-3 mr-3">
								<Link
									href="https://prime-steak.vercel.app"
									className=""
									rel="noopener noreferrer"
									target="_blank"
								>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95, rotate: "0deg" }}
										className="cursor-pointer rounded bg-white text-black text-sm"
									>
										<DemoIcon />
									</motion.button>
								</Link>
								<div>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95, rotate: "0deg" }}
										className="cursor-not-allowed text-white "
									>
										<GithubIcon />
									</motion.button>
								</div>
							</div>
						</div>
						<div className=" max-w-[36rem] text-right ml-3 mr-3">
							<h1 className="text-white font-main font-bold text-4xl pt-14">
								Hiwot Studio
							</h1>
							<div className="flex gap-1  text-sm font-medium text-white justify-end">
								<span>React,</span>
								<span>TypeScript,</span>
								<span>Tailwind CSS,</span>
								<span>EmailJS</span>
							</div>
							<div className=" mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white font-main">
									Designed and developed a fully responsive, SEO-optimized
									website for a boutique salon in Bethesda, MD, resulting in a
									40% increase in online bookings and a significant boost in web
									traffic within the first three months of launch.
								</p>
							</div>
						</div>
						<div className="max-w-[36rem] mt-2 mr-3 ml-3">
							<Image
								src="/salon.jpeg"
								width={600}
								height={350}
								alt="mt"
								className="rounded-2xl"
							></Image>
							<div className="flex items-center my-3 space-x-5 ml-3 mr-3">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95, rotate: "0deg" }}
									className="cursor-not-allowed rounded bg-white  text-black text-sm"
								>
									<DemoIcon />
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95, rotate: "0deg" }}
									className="cursor-not-allowed text-white "
								>
									<GithubIcon />
								</motion.button>
							</div>
						</div>
						<div className="max-w-[36rem] ml-3 mr-3 mt-5 ">
							<h1 className="text-white font-main font-bold text-4xl pt-14">
								Music Transfer
							</h1>
							<div className="flex gap-1 text-sm font-medium text-white">
								<span className="">React,</span>
								<span className="">TypeScript,</span>
								<span className="">Java,</span>
								<span className="">Spring Boot,</span>
								<span className="">Tailwind CSS</span>
							</div>
							<div className="mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white font-main">
									Crafted a React web app that transfers my Spotify playlists to
									Apple Music.
								</p>
							</div>
						</div>
						<div className="max-w-[36rem] mt-2 mr-3 ml-3">
							<Image
								src="/musicTransfer.jpg"
								width={600}
								height={350}
								alt="mt"
								className="rounded-2xl"
							></Image>
							<div className="flex items-center my-3 space-x-5 ml-3 mr-3">
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
						<div className=" max-w-[36rem] text-right ml-3 mr-3">
							<h1 className="text-white font-main font-bold text-4xl pt-14">
								Gainz
							</h1>
							<div className="flex gap-1  text-sm font-medium text-white justify-end">
								<span>React Native,</span>
								<span>TypeScript,</span>
								<span>Python,</span>
								<span>AWS,</span>
								<span>Clerk,</span>
								<span>Tamagui</span>
							</div>
							<div className=" mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white font-main">
									Co-developed a social media and fitness mobile application.
									This app users to create, modify, and track workouts. Users
									can also share workouts and engage with their friends.
								</p>
							</div>
						</div>
						<div className="max-w-[36rem] mt-2 mr-3 ml-3">
							<Image
								src="/gainz.png"
								width={600}
								height={350}
								alt="mt"
								className="rounded-2xl"
							></Image>
							<div className="flex items-center my-3 space-x-5 ml-3 mr-3 justify-end">
								<Link
									href="https://www.youtube.com/watch?v=iAC8FYCfB2A"
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
									href="https://github.com/kushaldevv/gainzApp"
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
						<div className="max-w-[36rem] ml-3 mr-3">
							<h1 className="text-white font-main font-bold text-4xl pt-14">
								Terp Exchange
							</h1>
							<div className="flex gap-1 text-sm font-medium text-white">
								<span className="">Swift,</span>
								<span className="">Google Firebase</span>
							</div>
							<div className="mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter">
								<p className="text-white font-main">
									Co-engineered a mobile marketplace for UMD students. Built
									with Swift, and leveraged Google Firebase to establish a
									robust UMD-affiliated auth system.
								</p>
							</div>
						</div>
						<div className="max-w-[36rem] mt-2 mr-3 ml-3">
							<Image
								src="/terpExchange.jpg"
								width={600}
								height={350}
								alt="te"
								className="rounded-2xl "
							></Image>
							<div className="flex items-center my-3 space-x-5 ml-3 mr-3">
								<Link
									href="https://www.youtube.com/watch?v=CR91i9f5n8U"
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
									href="https://github.com/kushaldevv/terpXchange"
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
					</div>
					<div id="fourth-section" className="flex flex-col items-center mb-28">
						<h1 className="text-white font-main font-bold text-5xl">Contact</h1>
						<h2 className="text-white font-main text-base font-bold mt-3 mb-3">
							Say hi — I don’t bite (unless you’re cake 🍰).
						</h2>
						<ContactPage />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
