import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ExperienceInfo {
	company: string;
	role: string;
	timeframe: string;
	imageHref: string;
	location: string;
}
const ExperienceCard = ({
	company,
	role,
	timeframe,
	imageHref,
	location,
}: ExperienceInfo) => {
	return (
		<div className="flex justify-center items-center border rounded-3xl border-white w-[95%] md:w-[50%] h-40 md:gap-5">
			<Image
				src={imageHref}
				width={150}
				height={100}
				alt={company}
				className=""
			></Image>
			<div className="text-white font-main">
				<Link
					href={"https://pandaprogrammer.com/"}
					rel="noopener noreferrer"
					target="_blank"
					className="cursor-pointer hover:underline"
				>
					<h1 className="text-xl font-bold">{company}</h1>
				</Link>

				<div className="flex flex-col">
					<span className="text-base">{role}</span>
					<span className="text-md">{timeframe}</span>
					<span className="text-sm">{location}</span>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
