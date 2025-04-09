import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "motion/react";

interface ProjectInfo {
	name: string;
	techStack: string;
	description: string;
	imageHref: string;
	demoLink: string;
	githubLink: string;
}

const ProjectCard = ({
	name,
	techStack,
	description,
	imageHref,
	demoLink,
	githubLink,
}: ProjectInfo) => {
	return (
		<div className="flex flex-col items-center border rounded-3xl border-white w-[95%] h-[410px] gap-2">
			<Image
				src={imageHref}
				width={350}
				height={200}
				alt={name}
				className="border rounded-2xl mt-4"
			></Image>
			<div className="flex flex-col text-white font-main items-center justify-center text-center gap-3 mb-2">
				<h1 className="text-2xl">{name}</h1>
				<h2 className="text-sm">{techStack}</h2>
				<h3 className="text-base">{description}</h3>
			</div>
			<div className="flex text-white gap-5 items-center">
				<Link
					href={demoLink}
					className=""
					rel="noopener noreferrer"
					target="_blank"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95, rotate: "0deg" }}
						className="cursor-pointer rounded border flex gap-2 items-center bg-white text-black px-2 py-0.5 w-16"
					>
						<p>Demo</p>
					</motion.button>
				</Link>

				<Link
					href={githubLink}
					className=""
					rel="noopener noreferrer"
					target="_blank"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95, rotate: "0deg" }}
						className="cursor-pointer rounded border flex items-center justify-center bg-white text-black px-2 py-0.5 w-16"
					>
						<FontAwesomeIcon icon={faGithub} className="text-2xl" />
					</motion.button>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
